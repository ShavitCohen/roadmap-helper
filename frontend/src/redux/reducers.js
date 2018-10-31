import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './feature/auth/auth.reducer';

const reducers = combineReducers({
  routing: routerReducer,
  auth,
});

export default reducers;
