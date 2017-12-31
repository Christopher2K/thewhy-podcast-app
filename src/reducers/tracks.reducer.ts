import Actions from '../actions/tracks.actions';
import { Action, Track } from '../types';
import { Reducer } from 'redux';

export interface State {
  list: Track[];
  currentTrack: Track;
  loading: boolean;
}

const initialState: State = {
  list: [],
  currentTrack: null,
  loading: false
};

export const reducer: Reducer<State> = (state: State = initialState, action: Action<any>) => {
  switch (action.type) {
    case Actions.GET_TRACKS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case Actions.GET_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...action.payload]
      };

    default:
      return state;
  }
};
