import { RootState as RS } from '../types'
import { createSelector } from 'reselect'
import { getIntRadiusWithinConstraints } from '../../utils'

export const getLeaderboardSlice = (s: RS) => s.leaderboard
export const getIsLeaderboardFetching = (s: RS) => getLeaderboardSlice(s).isFetching
export const getTeamsById = (s: RS) => getLeaderboardSlice(s).teamsById
export const getTeamNamesByOrder = (s: RS) => getLeaderboardSlice(s).teamNamesByOrder

export type LeaderboardSelectionConfig = {
  teamName: string | null
  radius: number
}
const passConfig = (s: RS, config: LeaderboardSelectionConfig) => config
export const getLeaderboardForTeamName = createSelector(
  getTeamsById,
  getTeamNamesByOrder,
  passConfig,
  (teamsById, teamNamesByOrder, config) => {
    try {
      const { radius, teamName } = config

      if (teamName === null) return []

      const teamOrder = teamsById[teamName].order
      const positionsToDisplay = getIntRadiusWithinConstraints(radius, teamOrder, {
        min: 1,
        max: teamNamesByOrder.length,
      })

      return positionsToDisplay.map((position: number) => {
        const teamName = teamNamesByOrder[position - 1]
        return teamsById[teamName]
      })
    } catch (e) {
      // Jestli mě nepodrazí API, tak by se nemělo stát...
      return []
    }
  }
)

const passNumber = (s: RS, n: number) => n
export const getTopOfLeaderboard = createSelector(
  getTeamsById,
  getTeamNamesByOrder,
  passNumber,
  (teamsById, teamNamesByOrder, numberOfEntries) => {
    const teamNamesToDisplay = teamNamesByOrder.slice(0, numberOfEntries)
    return teamNamesToDisplay.map(name => teamsById[name])
  }
)
