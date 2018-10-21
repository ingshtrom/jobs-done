// @flow
import uuid from 'uuid/v4';
import type { Task } from '../types';

export const CREATE_TASK = 'CREATE_TASK';

export function createTask(task: Task) {
  const newTask = { ...task };
  newTask.id = uuid();
  return {
    type: CREATE_TASK,
    task: newTask
  };
}
