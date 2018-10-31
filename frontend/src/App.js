import React from 'react';
import Home from './app/Home';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import LogIn from './containers/Login';
import store from 'store';

const RestrictedRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      store.get('token')
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/app',
            state: { from: props.location },
          }}
        />}
  />;

const App = ({ match }) => (
  <Switch>

    <Route
      exact path="/"
      component={LogIn}
    />

    <Route
      path="/app"
      component={Home}
    />

  </Switch>

);

export default withRouter(App);
