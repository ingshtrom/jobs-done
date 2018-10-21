// @flow
import { CREATE_TASK } from '../actions/tasks';
import type { Action, Task } from '../types';

type ReducerState = {
  tasks: Array<Task>
};

const defaultState = {
  tasks: []
};

export default function counter(
  state: ReducerState = defaultState,
  action: Action
) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
    default:
      return state;
  }
}
