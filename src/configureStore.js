import { createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'remote-redux-devtools'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers/index'

const logger = createLogger()

const middleware = [logger, thunk];

// const enhancers = compose(
//   applyMiddleware(...middleware),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
