import { reducer } from 'ts-action'
import { on } from 'ts-action-immer'
import * as AC from './actionCreators'
import { Team } from '../../requests/types'
import { recordClick, undoClick } from '../_global/actionCreators'
import { getTeamNamesByOrder, sortLeaderboard } from '../../utils/sorting'

export type TeamsByName = Record<string, Team>

export type LeaderboardSlice = {
  teamsByName: TeamsByName
  teamNamesByOrder: string[]
  isFetching: boolean
}

const initialState: LeaderboardSlice = {
  teamsByName: {},
  teamNamesByOrder: [],
  isFetching: false,
}

const leaderboardReducer = reducer(
  initialState,
  on(AC.getLeaderboardRequest, state => {
    state.isFetching = true
  }),
  on(AC.getLeaderboardSuccess, (state, action) => {
    const { leaderboard } = action.payload

    state.teamsByName = leaderboard.reduce((acc, curr) => {
      acc[curr.team] = curr
      return acc
    }, {} as TeamsByName)

    state.teamNamesByOrder = leaderboard.map(({ team }) => team)

    state.isFetching = false
  }),
  on(AC.getLeaderboardError, state => {
    state.isFetching = false
  }),
  on(recordClick, (state, action) => {
    const { teamName } = action.payload

    if (!state.teamsByName[teamName]) {
      state.teamNamesByOrder.push(teamName)
      state.teamsByName[teamName] = {
        order: state.teamNamesByOrder.length + 1,
        team: teamName,
        clicks: 0,
      }
    }

    state.teamsByName[teamName].clicks++

    const sortedLeaderboard = sortLeaderboard(Object.values(state.teamsByName))
    const teamNamesByOrder = getTeamNamesByOrder(sortedLeaderboard)
    state.teamNamesByOrder = teamNamesByOrder

    teamNamesByOrder.forEach((name, index) => {
      state.teamsByName[name].order = index + 1
    })
  }),
  on(undoClick, (state, action) => {
    const { teamName } = action.payload

    // Not really a concern rn, but why not...
    if (!state.teamsByName[teamName]) {
      state.teamNamesByOrder.push(teamName)
      state.teamsByName[teamName] = {
        order: state.teamNamesByOrder.length + 1,
        team: teamName,
        clicks: 0,
      }
      return
    }

    state.teamsByName[teamName].clicks--

    const sortedLeaderboard = sortLeaderboard(Object.values(state.teamsByName))
    const teamNamesByOrder = getTeamNamesByOrder(sortedLeaderboard)
    state.teamNamesByOrder = teamNamesByOrder

    teamNamesByOrder.forEach((name, index) => {
      state.teamsByName[name].order = index + 1
    })
  })
)

export default leaderboardReducer
