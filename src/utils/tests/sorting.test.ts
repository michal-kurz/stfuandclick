import _shuffle from 'lodash/fp/shuffle'
import { compareTeams, getTeamNamesByOrder, sortLeaderboard } from '../sorting'
import { Team } from '../../requests/types'
import { mockLeaderboard } from './mockData'

// This tests if compareTeams is implemented properly
describe('compareTeams()', () => {
  const aTeam: Team = { clicks: 1337, team: 'a', order: 1 }
  const bTeam: Team = { clicks: 420, team: 'b', order: 2 }
  const cTeam: Team = { clicks: 420, team: 'c', order: 3 }
  const dTeam: Team = { clicks: 420, team: 'd', order: 3 }

  test('Different click count (sort based on `clicks`)', () => {
    expect(compareTeams(aTeam, bTeam)).toBe(-1)
    expect(compareTeams(bTeam, aTeam)).toBe(1)
  })
  test('Same click count (sort based on `order`)', () => {
    expect(compareTeams(bTeam, cTeam)).toBe(-1)
    expect(compareTeams(cTeam, bTeam)).toBe(1)

    expect(compareTeams(cTeam, dTeam)).toBe(0)
    expect(compareTeams(dTeam, cTeam)).toBe(0)
  })
})

// This tests if compareTeams is actually useful
describe('sortLeaderboard() & getTeamNamesByOrder()', () => {
  const leaderboard = mockLeaderboard

  test('Is leaderboard legit (no gaps, properly sorted)', () => {
    // cba to write test for isLeaderboardLegit, too :)
    const isLeaderboardLegit = () => {
      let prevClicks = Infinity
      for (let i = 0; i < mockLeaderboard.length; i++) {
        const currentTeamRecord = leaderboard[i]
        const { order, clicks } = currentTeamRecord
        if (clicks > prevClicks) return false
        if (order !== i + 1) return false
        prevClicks = clicks
      }
      return true
    }
    expect(isLeaderboardLegit()).toEqual(true)
  })

  test('sorting works properly', () => {
    const shuffledLeaderboard = _shuffle(mockLeaderboard)
    const sortedLeaderboard = sortLeaderboard(shuffledLeaderboard)
    expect(sortedLeaderboard).toEqual(mockLeaderboard)

    const namesByOrder = getTeamNamesByOrder(sortedLeaderboard)
    const allInOrder = namesByOrder.every((name, index) => {
      const team = sortedLeaderboard.find(t => t.team === name)
      return !!team && team.order === index + 1
    })
    expect(allInOrder).toBe(true)
  })
})
