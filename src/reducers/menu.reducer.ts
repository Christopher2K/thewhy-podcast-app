import * as Actions from '../actions/menu.actions';
import { Action } from '../types';
import { Reducer } from 'redux';

export interface State {
  opened: boolean;
}

const initialState: State = {
  opened: false
};

export const reducer: Reducer<State> = (state: State = initialState, action: Action<any>) => {
  switch (action.type) {
    case Actions.OPEN_MENU:
      return {
        ...state,
        opened: true
      };

    case Actions.CLOSE_MENU:
      return {
        ...state,
        opened: false
      };

    default:
      return state;
  }
};
