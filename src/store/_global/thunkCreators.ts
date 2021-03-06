import _debounce from 'lodash/debounce'
import { ThunkCreator, ThunkDispatch } from '../types'
import * as AC from './actionCreators'
import * as R from '../../requests/recordClick'
import { handleRequestError, ReqErr } from '../../utils'
import { getSessionString } from '../session/selectors'
import { ClickScore } from '../../requests/types'
import { fetchLeaderboard } from '../leaderboard/thunkCreators'
import { LEADERBOARD_REFETCH_DEBOUNCE_MS } from '../../config'

type RecordClickParams = {
  teamName: string
}

type RecordClick = ThunkCreator<RecordClickParams>

// I think that debounce results in better UX than throttle, because it eliminates the jitter
// from reconciling stale responses (except for when user stops clicking, but that one feels OK
// to me) as I rarely sort teams with the same click count the same way BE does
const refetchLeaderboardDebounced = _debounce(
  (dispatch: ThunkDispatch, myTeamName: string) => dispatch(fetchLeaderboard({ myTeamName })),
  LEADERBOARD_REFETCH_DEBOUNCE_MS,
)

// eslint-disable-next-line import/prefer-default-export
export const recordClick: RecordClick = ({ teamName }) => (dispatch, getState) => {
  return Promise.resolve().then(async () => {
    dispatch(AC.recordClick({ teamName }))

    const sessionString = getSessionString(getState())

    const onError = (e: ReqErr<ClickScore>) => {
      handleRequestError(e)
      dispatch(AC.undoClick({ teamName }))
    }

    await R.recordClick(teamName, sessionString)
      .then(() => refetchLeaderboardDebounced(dispatch, teamName))
      .catch(onError)
  })
}
