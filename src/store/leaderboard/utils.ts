import { Team } from '../../requests/types'
import { TeamsByName } from './reducer'
import { compareTeams } from '../../utils/sorting'

export function createNewTeam(name: string, order: number): Team {
  return {
    team: name,
    order,
    clicks: 0,
  }
}

export const makeCompareTeamsByName = (teamsByName: TeamsByName) => {
  return (name1: string, name2: string) => {
    if (!teamsByName[name1] || !teamsByName[name2]) return 0
    return compareTeams(teamsByName[name1], teamsByName[name2])
  }
}
