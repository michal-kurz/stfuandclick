import { reducer } from 'ts-action'
import { v4 } from 'node-uuid'
import { on } from 'ts-action-immer'
import { recordClick, undoClick } from '../_global/actionCreators'

export type SessionSlice = {
  sessionString: string
  sessionClicks: number
}

const initialState: SessionSlice = {
  sessionString: v4(),
  sessionClicks: 0,
}

const sessionReducer = reducer(
  initialState,
  on(recordClick, state => {
    state.sessionClicks++
  }),
  on(undoClick, state => {
    state.sessionClicks--
  })
)

export default sessionReducer
