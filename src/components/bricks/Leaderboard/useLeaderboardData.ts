import { useMemo } from 'react'
import {
  getIsLeaderboardFetching,
  getLeaderboardForTeamName,
  getTopOfLeaderboard,
  LeaderboardSelectionConfig,
} from '../../../store/leaderboard/selectors'
import { LEADERBOARD_RADIUS, TOP_LEADERBOARD_LENGTH } from '../../../utils'
import { useSelector } from '../../../store/utils'

const useLeaderboardData = (teamName: string | null) => {
  // memoize the reselect input
  const selectorConfig = useMemo(
    (): LeaderboardSelectionConfig => ({ radius: LEADERBOARD_RADIUS, teamName }),
    [teamName],
  )

  const topOfLeaderboard = useSelector(s => getTopOfLeaderboard(s, TOP_LEADERBOARD_LENGTH))
  const leaderboardAroundTeam = useSelector(s => getLeaderboardForTeamName(s, selectorConfig))

  const leaderboardData = teamName === null ? topOfLeaderboard : leaderboardAroundTeam

  const isFetching = useSelector(getIsLeaderboardFetching)

  return [leaderboardData, isFetching] as const
}

export default useLeaderboardData
