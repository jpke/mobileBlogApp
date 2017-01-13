import React, {Component} from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import store from '../configureStore'
import PostForm from './PostForm';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const logger = createLogger()
// const middleware = [logger, thunk];
// const enhancers = compose(
//   applyMiddleware(...middleware),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )
// const store = createStore(
//   rootReducer,
//   {},
//   enhancers
// )

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PostForm />
      </Provider>
    );
  }
}
