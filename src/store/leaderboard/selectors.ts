import { RootState as RS } from '../types'
import { createSelector } from 'reselect'
import { getIntRadiusWithinConstraints } from '../../utils'

export const getLeaderboardSlice = (s: RS) => s.leaderboard
export const getIsLeaderboardFetching = (s: RS) => getLeaderboardSlice(s).isFetching
export const getTeamsByName = (s: RS) => getLeaderboardSlice(s).teamsByName
export const getTeamNamesByOrder = (s: RS) => getLeaderboardSlice(s).teamNamesByOrder

export type LeaderboardSelectionConfig = {
  teamName: string | null
  radius: number
}

const passConfig = (s: RS, config: LeaderboardSelectionConfig) => config
export const getLeaderboardForTeamName = createSelector(
  getTeamsByName,
  getTeamNamesByOrder,
  passConfig,
  (teamsByName, teamNamesByOrder, config) => {
    try {
      const { radius, teamName } = config

      if (teamName === null) return []

      const teamOrder = teamsByName[teamName].order
      const positionsToDisplay = getIntRadiusWithinConstraints(radius, teamOrder, {
        min: 1,
        max: teamNamesByOrder.length,
      })

      return positionsToDisplay.map((position: number) => {
        const teamName = teamNamesByOrder[position - 1]
        return teamsByName[teamName]
      })
    } catch (e) {
      // Jestli mě nepodrazí API, tak by se nemělo stát...
      return []
    }
  }
)

export const getTeamClicks = (s: RS, teamName: string): number | undefined =>
  getTeamsByName(s)[teamName]?.clicks

const passNumber = (s: RS, n: number) => n
export const getTopOfLeaderboard = createSelector(
  getTeamsByName,
  getTeamNamesByOrder,
  passNumber,
  (teamsByName, teamNamesByOrder, numberOfEntries) => {
    const teamNamesToDisplay = teamNamesByOrder.slice(0, numberOfEntries)
    return teamNamesToDisplay.map(name => teamsByName[name])
  }
)
