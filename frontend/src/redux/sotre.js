import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';
import { loggerMiddleware } from './core/logger.middleware';
import { actionSplitterMiddleware } from './core/actionSplitter.middleware';
import { apiMiddleware } from './core/api/api.middleware';
import { authMiddleware } from './feature/auth/auth.middleware';
import { employeesMiddleware } from './feature/employees/employees.middleware';
import { topicsMiddleware } from './feature/topics/topics.middleware';

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const coreMiddlewares = [
  actionSplitterMiddleware,
  routeMiddleware,
  apiMiddleware,
  loggerMiddleware,
];
const appMiddlewares = [
  authMiddleware,
  employeesMiddleware,
  topicsMiddleware,
];

const middlewares = [...coreMiddlewares, ...appMiddlewares];

export default function configureStore(initialState) {
  return createStore(reducers, applyMiddleware(...middlewares));
}

export { history };