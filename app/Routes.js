/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import TasksPage from './containers/TasksPage';
import SettingsPage from './containers/SettingsPage';
import Sidebar from './components/Sidebar';
import MainAppBar from './components/MainAppBar';

const routeMap = {
  [routes.TASKS]: 'Tasks',
  [routes.SETTINGS]: 'Settings'
};

export default () => (
  <App>
    <Sidebar>
      <MainAppBar routeMap={routeMap} />
      <Switch>
        <Route path={routes.SETTINGS} component={SettingsPage} />
        <Route path={routes.TASKS} component={TasksPage} />
        <Redirect to={routes.TASKS} />
      </Switch>
    </Sidebar>
  </App>
);
