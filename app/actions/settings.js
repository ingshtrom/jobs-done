// @flow
import type { PersistedData, Settings } from '../types';

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const LOAD_SETTINGS = 'LOAD_SETTINGS';
export const INIT_NEW_INSTANCE = 'INIT_NEW_INSTANCE';

export function updateSettings(settings: Settings) {
  return {
    type: UPDATE_SETTINGS,
    settings
  };
}

export function loadSettings(data: PersistedData) {
  return {
    type: LOAD_SETTINGS,
    data
  };
}

export function initNewInstance() {
  return {
    type: INIT_NEW_INSTANCE
  };
}
