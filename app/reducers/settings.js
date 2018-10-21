// @flow
import os from 'os';
import type { Action, Settings } from '../types';
import { UPDATE_SETTINGS } from '../actions/settings';

const defaultState = {
  saveLocation: os.homedir()
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
    default:
      return state;
  }
}
