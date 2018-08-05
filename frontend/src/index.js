import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from "./store/reducers";
import App from './components/App';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

render(<App store={store} />, document.getElementById('app'));
