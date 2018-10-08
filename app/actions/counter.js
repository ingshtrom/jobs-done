// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_TASK = 'CREATE_TASK';

export function createProject() {
  return {
    type: CREATE_PROJECT
  };
}

export function createTask() {
  return {
    type: CREATE_TASK
  };
}
