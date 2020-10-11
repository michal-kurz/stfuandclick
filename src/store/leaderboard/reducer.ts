import { reducer } from 'ts-action'
import { on } from 'ts-action-immer'
import * as AC from './actionCreators'
import { LeaderboardRecord } from '../../requests/types'

type TeamsById = {
  [teamName: string]: LeaderboardRecord
}

export type LeaderboardSlice = {
  teamsById: TeamsById
  teamNamesByOrder: string[]
  isFetching: boolean
}

const initialState: LeaderboardSlice = {
  teamsById: {},
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

    state.teamsById = leaderboard.reduce((acc, curr) => {
      acc[curr.team] = curr
      return acc
    }, {} as TeamsById)

    state.teamNamesByOrder = leaderboard.map(({ team }) => team)

    state.isFetching = false
  }),
  on(AC.getLeaderboardError, state => {
    state.isFetching = false
  })
)

export default leaderboardReducer
