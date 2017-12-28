import { Action as ReduxAction } from 'redux';

export interface Action<T> extends ReduxAction {
  payload?: T;
}

export type ActionFactory<T = null> = (payload?: T) => Action<T>;
