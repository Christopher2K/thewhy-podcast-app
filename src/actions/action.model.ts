import { Action as ReduxAction } from 'redux';

export interface Action extends ReduxAction {
    payload?: any
}

export type ActionFactory = (payload?: any) => Action;