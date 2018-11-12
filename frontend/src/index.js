import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore, { history } from './redux/sotre';

import App from './App';

const store = configureStore();

const rootEl = document.getElementById('octopus-app');

const render = () => {
  const App = require('./App').default;

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, rootEl);
};

render();