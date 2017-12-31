import { Action } from '../types';
import Actions from '../actions/ui.actions';

export interface State {
  loading: boolean;
}

const initialState: State = {
  loading: true
};

export function reducer(state: State = initialState, action: Action<any>): State {
  switch (action.type) {
    case Actions.STOP_INITIAL_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
