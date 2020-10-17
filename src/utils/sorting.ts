import { Team } from '../requests/types'

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
