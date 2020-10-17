import { ThunkCreator } from '../types'
import * as AC from './actionCreators'
import { getIsLeaderboardFetching } from './selectors'
import { getLeaderboard } from '../../requests'
import { handleRequestError } from '../../utils'

// eslint-disable-next-line import/prefer-default-export
export const fetchLeaderboard: ThunkCreator<void> = () => (dispatch, getState) => {
  return Promise.resolve().then(async () => {
    const isFetching = getIsLeaderboardFetching(getState())
    if (isFetching) return

    dispatch(AC.getLeaderboardRequest)

    getLeaderboard()
      .then(res => dispatch(AC.getLeaderboardSuccess({ leaderboard: res.data })))
      .catch(e => {
        handleRequestError(e)
        dispatch(AC.getLeaderboardError())
      })
  })
}
