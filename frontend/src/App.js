import React from 'react';
import Home from './app/Home';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import LogIn from './containers/Login';

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

export default withRouter(hot(module)(App));
