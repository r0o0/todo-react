import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// hot reload redux
if(module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    reduxDevTools
  )
);

export default store;