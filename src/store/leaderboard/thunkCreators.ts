import { ThunkCreator } from '../types'
import * as AC from './actionCreators'
import { getIsLeaderboardFetching, getTeamClicks } from './selectors'
import { getLeaderboard } from '../../requests'
import { handleRequestError } from '../../utils'

type Params = {
  myTeamName: string | undefined
}

// eslint-disable-next-line import/prefer-default-export
export const fetchLeaderboard: ThunkCreator<Params> = ({ myTeamName }) => (dispatch, getState) => {
  return Promise.resolve().then(async () => {
    const isFetching = getIsLeaderboardFetching(getState())
    if (isFetching) return

    dispatch(AC.getLeaderboardRequest)

    getLeaderboard()
      .then(res => {
        const myTeamClicksStore = getTeamClicks(getState(), myTeamName ?? '')

        if (!myTeamClicksStore) {
          dispatch(AC.getLeaderboardSuccess({ leaderboard: res.data }))
          return
        }

        // Do not decrease team clicks for stale leaderboard responses
        const transformedLeaderboard = res.data.map(team => {
          if (team.team !== myTeamName) return team
          return { ...team, clicks: Math.max(team.clicks, myTeamClicksStore) }
        })

        dispatch(AC.getLeaderboardSuccess({ leaderboard: transformedLeaderboard }))
      })
      .catch(e => {
        handleRequestError(e)
        dispatch(AC.getLeaderboardError())
      })
  })
}
