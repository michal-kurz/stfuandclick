import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { store } from './configureStore'

export type RootState = ReturnType<typeof store.getState>

// I use the Promise.resolve.then() trick to be able to await the thunk
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ThunkCreator<Params, PromiseType = any> = (
  params: Params,
) => ThunkAction<Promise<PromiseType>, RootState, null, Action>

export type ThunkDispatch = Parameters<ReturnType<ThunkCreator<any>>>[0]
