// @flow
import type { Settings } from '../types';

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export function updateSettings(settings: Settings) {
  return {
    type: UPDATE_SETTINGS,
    settings
  };
}
