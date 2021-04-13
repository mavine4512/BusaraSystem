import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';

import Auth from '../../pages/auth/Auth';
import Dashboard from '../../pages/dashboard/Dashboard';
import useStyles from './styles';
import RequireAuth from './require-auth';
import { Paths } from '../../enums';
import { history } from '../../utils';

function RouteApp(): JSX.Element {
  const { root, switchContainer } = useStyles();

  return (
    <Router history={history}>
      <div className={root}>
        <div className={switchContainer}>
          <Switch>
            <Route exact path={Paths.AUTH} component={Auth} />
            <Route
              exact
              path={Paths.DASHBOARD}
              component={RequireAuth()(Dashboard)}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default RouteApp;
