import { reducer } from 'ts-action'
import { v4 } from 'node-uuid'

export type SessionSlice = {
  sessionString: string
}

const initialState: SessionSlice = {
  sessionString: v4(),
}

const sessionReducer = reducer(initialState)

export default sessionReducer
