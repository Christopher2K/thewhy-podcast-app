import Actions from '../actions/profile.actions';
import { Action } from '../types';
import { Reducer } from 'redux';
import { Profile } from '../types';

export interface State {
  id: string;
  name: string;
  url: string;
}

const initialState: State = {
  id: null,
  name: null,
  url: null
};

export const reducer: Reducer<State> = (state: State = initialState, { type, payload }: Action<any>) => {
  switch (type) {
    case Actions.GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...payload as Profile
      };
    default:
      return state;
  }
};
