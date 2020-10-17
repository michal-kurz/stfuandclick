import { action, payload } from 'ts-action'
import { Team } from '../../requests/types'

export const getLeaderboardRequest = action('LEADERBOARDS > GET > REQUEST')
export const getLeaderboardSuccess = action(
  'LEADERBOARDS > GET > SUCCESS',
  payload<{ leaderboard: Team[] }>()
)
export const getLeaderboardError = action('LEADERBOARDS > GET > ERROR')
