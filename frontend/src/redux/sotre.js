import { applyMiddleware, createStore, compose } from 'redux';
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

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);

const configureStore = () => {
  const store = createStore(reducers, enhancer);
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(reducers);
      });
    }
  }
  return store;
};

export default configureStore;

export { history };