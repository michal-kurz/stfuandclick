import { reducer } from 'ts-action'
import { on } from 'ts-action-immer'
import _mapKeys from 'lodash/mapKeys'
import * as AC from './actionCreators'
import { Team } from '../../requests/types'
import { recordClick, undoClick } from '../_global/actionCreators'
import { insertionSort } from '../../utils/sorting'
import { createNewTeam, makeCompareTeamsByName } from './utils'

export type TeamsByName = Record<string, Team>

export type LeaderboardSlice = {
  teamsByName: TeamsByName
  // I would usually demote this to a memoized selector (since it's deterministic from teamsByName),
  // but I don't see a good way of doing that while using my insertion sort trick
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

    state.teamsByName = _mapKeys(leaderboard, val => val.team)
    state.teamNamesByOrder = leaderboard.map(({ team }) => team)

    state.isFetching = false
  }),
  on(AC.getLeaderboardError, state => {
    state.isFetching = false
  }),
  on(recordClick, (state, action) => {
    const { teamName } = action.payload

    // If a team doesn't yet exist, create it
    if (!state.teamsByName[teamName]) {
      const existingTeamCount = Object.keys(state.teamsByName).length
      state.teamsByName[teamName] = createNewTeam(teamName, existingTeamCount + 1)
      state.teamNamesByOrder.push(teamName)
    }

    state.teamsByName[teamName].clicks += 1
    // Since I'm only displacing one team out of order, I can easily get away with re-sorting the
    // whole leaderboard on every click, as long as I use insertion sort - this result in near 1n
    // complexity (2n worst case)
    const comparator = makeCompareTeamsByName(state.teamsByName)
    state.teamNamesByOrder = insertionSort(state.teamNamesByOrder, comparator)

    // Do not worry about the order - just leave it at it's old value and sort the leaderboard based
    // on clicks. Since I can't predict how server will order it relatively to other items with
    // identical click count, I might as well leave it as it is and correct for the disparity once
    // i re-fetch leaderboard from BE. I think this is fine and an excellent tradeoff that allows me
    // to instantly react to user's clicks.
  }),
  on(undoClick, (state, action) => {
    const { teamName } = action.payload

    // If a team doesn't yet exist, create it
    if (!state.teamsByName[teamName]) {
      const existingTeamCount = Object.keys(state.teamsByName).length
      state.teamsByName[teamName] = createNewTeam(teamName, existingTeamCount + 1)
      state.teamNamesByOrder.push(teamName)
    }

    state.teamsByName[teamName].clicks -= 1

    const comparator = makeCompareTeamsByName(state.teamsByName)
    state.teamNamesByOrder = insertionSort(state.teamNamesByOrder, comparator)
  }),
)

export default leaderboardReducer
