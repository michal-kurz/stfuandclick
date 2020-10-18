import produce from 'immer'
import { Team } from '../requests/types'
import { TeamsByName } from '../store/leaderboard/reducer'

export function compareTeams(a: Team, b: Team) {
  if (a.clicks < b.clicks) return 1
  if (b.clicks < a.clicks) return -1
  return a.order - b.order
}

export function sortLeaderboard(board: Team[]) {
  return board.sort(compareTeams)
}

export function getTeamNamesByOrder(board: Team[]) {
  return board.map(t => t.team)
}

// The `myTeam` side of naming is a bit awkward, but the best I could come up with

type TeamNamesByOrder = string[]
type ReSortTeams = (
  teamsByName: TeamsByName,
  teamNamesByOrder: TeamNamesByOrder,
  myTeam: Team,
) => readonly [TeamsByName, TeamNamesByOrder]

// Assumes the team by `myTeamName` just gained some clicks, which may have
// displaced it out of order, but that leaderboard was properly sorted prior to that
// There is a much more straight-forward, but quite wasteful way of sorting, commented out in Leaderboard reducer
export const reSortLeaderboardUponClickIncrease: ReSortTeams = (
  teamsByName,
  teamNamesByOrder,
  myTeam,
) => {
  const myTeamIndex = myTeam.order - 1
  if (myTeamIndex === 0) return [teamsByName, teamNamesByOrder] as const
  const myTeamName = myTeam.team
  const myTeamClicks = myTeam.clicks
  const precedingTeam = teamsByName[teamNamesByOrder[myTeamIndex - 1]]
  const isMyTeamOutOfOrder = precedingTeam.clicks <= myTeamClicks

  if (!isMyTeamOutOfOrder) return [teamsByName, teamNamesByOrder] as const
  // An ordered list with names of all the teams myTeam should be skipping
  // declaring an array and pushing to it from array.every(), rather than using array.reduce(), to avoid looping over the whole thing
  const teamNamesToSkip: string[] = []
  // Team names of all preceding teams, reversed, so I can loop from those closest to myTeam
  const precedingTeamNamesByProximity = teamNamesByOrder.slice(0, myTeamIndex).reverse()

  precedingTeamNamesByProximity.every(currName => {
    const currTeam = teamsByName[currName]
    const shouldSkip = myTeam.clicks > currTeam.clicks
    if (shouldSkip) teamNamesToSkip.unshift(currName) // append to the beginning, since we're looping a reversed array
    return shouldSkip
  })

  const numberOfSkippedTeams = teamNamesToSkip.length
  const leadingTeams = teamNamesByOrder.slice(0, myTeamIndex - numberOfSkippedTeams)
  const trailingTeams = teamNamesByOrder.slice(myTeamIndex + 1)

  // Adjust the order of affected teams
  const newTeamsByName = produce(teamsByName, draft => {
    draft[myTeamName].order -= numberOfSkippedTeams
    teamNamesToSkip.forEach(skippedName => {
      draft[skippedName].order += 1
    })
  })

  const newTeamNamesByOrder = [...leadingTeams, myTeamName, ...teamNamesToSkip, ...trailingTeams]

  return [newTeamsByName, newTeamNamesByOrder] as const
}

// Assumes the team by `myTeamName` just lost some clicks, which may have
// displaced it out of order, but that leaderboard was properly sorted prior to that
// Analogous to reSortUponSkip, but for the other direction.
// Unfortunately I didn't find a neat way of abstracting the common logic without ludicrous branching
export const reSortLeaderboardUponClickDecrease: ReSortTeams = (
  teamsByName,
  teamNamesByOrder,
  myTeam,
) => {
  const myTeamIndex = myTeam.order - 1
  if (myTeamIndex === teamNamesByOrder.length) return [teamsByName, teamNamesByOrder] as const
  const myTeamName = myTeam.team
  const myTeamClicks = myTeam.clicks
  const followingTeam = teamsByName[teamNamesByOrder[myTeamIndex + 1]]
  const isMyTeamOutOfOrder = myTeamClicks >= followingTeam.clicks

  if (!isMyTeamOutOfOrder) return [teamsByName, teamNamesByOrder] as const

  const teamNamesToSkip: string[] = [] // An ordered list with names of all the teams myTeam should be skipping
  // This time array is already sorted by proximity, so no .reverse()
  const followingTeamNames = teamNamesByOrder.slice(myTeamIndex + 1, teamNamesByOrder.length)

  followingTeamNames.every(currName => {
    const currTeam = teamsByName[currName]
    const shouldSkip = currTeam.clicks > myTeam.clicks
    if (shouldSkip) teamNamesToSkip.push(currName)
    return shouldSkip
  })

  const numberOfSkippedTeams = teamNamesToSkip.length
  const leadingTeams = teamNamesByOrder.slice(0, myTeamIndex)
  const trailingTeams = teamNamesByOrder.slice(myTeamIndex + numberOfSkippedTeams + 1)

  // Adjust the order of affected teams
  const newTeamsByName = produce(teamsByName, draft => {
    draft[myTeamName].order += numberOfSkippedTeams
    teamNamesToSkip.forEach(skippedName => {
      draft[skippedName].order -= 1
    })
  })

  const newTeamNamesByOrder = [...leadingTeams, ...teamNamesToSkip, myTeamName, ...trailingTeams]

  return [newTeamsByName, newTeamNamesByOrder] as const
}
