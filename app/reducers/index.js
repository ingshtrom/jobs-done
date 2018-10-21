// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import tasks from './tasks';
import settings from './settings';

const rootReducer = combineReducers({
  settings,
  tasks,
  router
});

export default rootReducer;
