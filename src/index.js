import React from 'react';
import ReactDOM from 'react-dom';
// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';
// CSS
import './index.css';
// COMPONENTS
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
