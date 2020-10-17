import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import leaderboardReducer from './leaderboard/reducer'
import sessionReducer from './session/reducer'

const middleware = [thunk]
const enhancers = []
// dev tools
const windowExists = typeof window === 'object'
if (windowExists) {
  const _window = window as any // eslint-disable-line no-underscore-dangle, @typescript-eslint/no-explicit-any
  const reduxDevtools = _window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
  const reduxDevtoolsConfig = {}
  if (process.env.NODE_ENV === 'development' && _window?.devToolsExtension) {
    enhancers.push(reduxDevtools && reduxDevtools(reduxDevtoolsConfig))
  }
}

const reducers = {
  leaderboard: leaderboardReducer,
  session: sessionReducer,
}

const rootReducer = combineReducers(reducers)

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, compose(applyMiddleware(...middleware), ...enhancers))
