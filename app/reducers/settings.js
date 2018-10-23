// @flow

import type { Action, Settings } from '../types';
import {
  INIT_NEW_INSTANCE,
  LOAD_SETTINGS,
  UPDATE_SETTINGS
} from '../actions/settings';

const defaultState = {
  isLoaded: false
};

export default function settings(
  state: Settings = defaultState,
  action: Action
) {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        ...action.settings
      };
    case LOAD_SETTINGS:
      return {
        ...state,
        isLoaded: true
      };
    case INIT_NEW_INSTANCE:
      return {
        ...state,
        isLoaded: true
      };
    default:
      return state;
  }
}
