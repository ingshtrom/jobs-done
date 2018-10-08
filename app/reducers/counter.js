// @flow
import { 
  CREATE_PROJECT,
  CREATE_TASK
} from '../actions/counter';
import type { Action, Project, Task } from './types';

type ReducerState = {
  projects: Array<Project>,
  tasks: Array<Task>
};

const defaultState = {
  projects: [],
  tasks: []
};

export default function counter(state: ReducerState = defaultState, action: Action) {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects,
          action.project
        ]
      };
    case CREATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.task
        ]
      };
    default:
      return state;
  }
};
