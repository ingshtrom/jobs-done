import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type Action = {
  +type: string,
  task?: Task,
  settings?: Settings
};

export type GetState = () => counterStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;

export type Task = {
  id?: string,
  title: string,
  notes: string
};

// export type Project = {
//   name: string,
//   description: string,
//   tasks: Array<Task>
// };

export type Settings = {
  isLoaded: boolean
};

export type PersistedData = {
  settings?: ?Settings,
  tasks: Array<Task>
};
