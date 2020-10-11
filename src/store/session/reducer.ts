import { reducer } from 'ts-action'
import { on } from 'ts-action-immer'
import { v4 } from 'node-uuid'
import * as AC from './actionCreators'

export type SessionSlice = {
  team: string | null
  sessionString: string
}

const initialState: SessionSlice = {
  team: null,
  sessionString: v4(),
}

const sessionReducer = reducer(
  initialState,
  on(AC.changeTeam, (state, action) => {
    const { teamName } = action.payload
    state.team = teamName
  })
)

export default sessionReducer
