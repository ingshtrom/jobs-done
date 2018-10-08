import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type counterStateType = {
  +counter: number
};

export type Action = {
  +type: string
};

export type GetState = () => counterStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;

export type Task = {
  +id: string,
  title: string,
  notes: string
};

export type Project = {
  name: string,
  description: string,
  tasks: Array<Task>
};
