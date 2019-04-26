import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// eslint-disable-next-line no-underscore-dangle
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    reduxDevTools,
  ),
);

// hot reload redux
if (module.hot) {
  module.hot.accept('../reducers', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('../reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
