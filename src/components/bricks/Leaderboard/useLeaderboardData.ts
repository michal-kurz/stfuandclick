import {
  getIsLeaderboardFetching,
  getLeaderboardForTeamName,
} from '../../../store/leaderboard/selectors'
import { useSelector } from '../../../store/utils'

const useLeaderboardData = (teamName: string | null) => {
  const leaderboardData = useSelector(s => getLeaderboardForTeamName(s, teamName ?? ''))
  const isFetching = useSelector(getIsLeaderboardFetching)

  return [leaderboardData, isFetching] as const
}

export default useLeaderboardData
