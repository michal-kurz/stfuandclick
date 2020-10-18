import { reducer } from 'ts-action'
import { on } from 'ts-action-immer'
import * as AC from './actionCreators'
import { Team } from '../../requests/types'
import { recordClick, undoClick } from '../_global/actionCreators'
import { reSortLeaderboardUponClickDecrease, reSortLeaderboardUponClickIncrease } from '../../utils/sorting'

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
    const newItemOrder = state.teamNamesByOrder.length + 1 // best save value in advance, before manipulating the array

    // Create the team, if not present
    if (!state.teamsByName[teamName]) {
      state.teamsByName[teamName] = {
        order: newItemOrder,
        team: teamName,
        clicks: 0,
      }
      state.teamNamesByOrder.push(teamName)
    }

    state.teamsByName[teamName].clicks += 1

    const [newTeamsByName, newTeamNamesByOrder] = reSortLeaderboardUponClickIncrease(
      state.teamsByName,
      state.teamNamesByOrder,
      state.teamsByName[teamName],
    )

    state.teamNamesByOrder = newTeamNamesByOrder
    state.teamsByName = newTeamsByName

    // This is a much more straight-forward way of sorting, but sorts the whole board on
    // each click, which sucks, since boards can get long and clicks may happen many times a second

    // const sortedLeaderboard = sortLeaderboard(Object.values(state.teamsByName))
    // const teamNamesByOrder = getTeamNamesByOrder(sortedLeaderboard)
    // state.teamNamesByOrder = teamNamesByOrder
    // teamNamesByOrder.forEach((name, index) => {
    //   state.teamsByName[name].order = index + 1
    // })
  }),
  on(undoClick, (state, action) => {
    const { teamName } = action.payload
    const newItemOrder = state.teamNamesByOrder.length + 1 // best save value in advance, before manipulating the array

    // Can't really happen rn, but why not...
    if (!state.teamsByName[teamName]) {
      state.teamsByName[teamName] = {
        order: newItemOrder,
        team: teamName,
        clicks: 0,
      }
      state.teamNamesByOrder.push(teamName)
    }

    state.teamsByName[teamName].clicks -= 1

    const [newTeamsByName, newTeamNamesByOrder] = reSortLeaderboardUponClickDecrease(
      state.teamsByName,
      state.teamNamesByOrder,
      state.teamsByName[teamName],
    )

    state.teamNamesByOrder = newTeamNamesByOrder
    state.teamsByName = newTeamsByName
  }),
)

export default leaderboardReducer
