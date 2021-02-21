import _debounce from 'lodash/debounce'
import { ThunkCreator, ThunkDispatch } from '../types'
import * as AC from './actionCreators'
import * as R from '../../requests/recordClick'
import { handleRequestError, ReqErr } from '../../utils'
import { getSessionString } from '../session/selectors'
import { ClickScore } from '../../requests/types'
import { fetchLeaderboard } from '../leaderboard/thunkCreators'
import { CLICK_DEBOUNCE_TIMEOUT_MS } from '../../config'

type RecordClickParams = {
  teamName: string
}

type RecordClick = ThunkCreator<RecordClickParams>

const refetchLeaderboardDebounced = _debounce(
  (dispatch: ThunkDispatch, myTeamName: string) => dispatch(fetchLeaderboard({ myTeamName })),
  CLICK_DEBOUNCE_TIMEOUT_MS,
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
