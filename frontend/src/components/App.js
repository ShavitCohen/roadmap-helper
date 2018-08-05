import React from 'react';
import { Provider } from 'react-redux';

import Home from './Home';

const App = ({ store }) => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
