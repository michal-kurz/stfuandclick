import { createSelector } from 'reselect'
import { RootState as RS } from '../types'
import {
  getIntRadiusWithinConstraints,
  LEADERBOARD_RADIUS,
  TOP_LEADERBOARD_LENGTH,
} from '../../utils'

export const getLeaderboardSlice = (s: RS) => s.leaderboard
export const getIsLeaderboardFetching = (s: RS) => getLeaderboardSlice(s).isFetching
export const getTeamsByName = (s: RS) => getLeaderboardSlice(s).teamsByName
export const getTeamNamesByOrder = (s: RS) => getLeaderboardSlice(s).teamNamesByOrder

export type LeaderboardSelectionConfig = {
  teamName: string | null
  radius: number
}

const passTeamName = (s: RS, teamName: string) => teamName

// Since I'm only ever looking up my own team, using makeGet pattern would be counterproductive
// (it would recompute the selector once per instance, instead of once period)
export const getMyTeamPosition = createSelector(
  getTeamNamesByOrder,
  passTeamName, // I <3 PRETTIER
  (namesByOrder, teamName) => {
    const index = namesByOrder.findIndex(name => name === teamName)
    if (index === -1) return null
    return index + 1
  },
)

export const getLeaderboardForTeamName = createSelector(
  getTeamsByName,
  getTeamNamesByOrder,
  getMyTeamPosition,
  (teamsByName, teamNamesByOrder, teamPosition) => {
    if (teamPosition === null) {
      const teamNamesToDisplay = teamNamesByOrder.slice(0, TOP_LEADERBOARD_LENGTH)
      return teamNamesToDisplay.map(name => teamsByName[name])
    }

    try {
      const positionsToDisplay = getIntRadiusWithinConstraints(LEADERBOARD_RADIUS, teamPosition, {
        min: 1,
        max: teamNamesByOrder.length,
      })

      return positionsToDisplay.map((position: number) => {
        const teamNameAtPosition = teamNamesByOrder[position - 1]
        return teamsByName[teamNameAtPosition]
      })
    } catch (e) {
      return [] // Jestli mě nepodrazí API, tak by se nemělo stát...
    }
  },
)

export const getTeamClicks = (s: RS, teamName: string): number | undefined => {
  return getTeamsByName(s)[teamName]?.clicks
}
