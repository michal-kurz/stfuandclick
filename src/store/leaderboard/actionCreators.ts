import { action, payload } from 'ts-action'
import { LeaderboardRecord } from '../../requests/types'

export const getLeaderboardRequest = action('LEADERBOARDS > GET > REQUEST')
export const getLeaderboardSuccess = action(
  'LEADERBOARDS > GET > SUCCESS',
  payload<{ leaderboard: LeaderboardRecord[] }>()
)
export const getLeaderboardError = action('LEADERBOARDS > GET > ERROR')
