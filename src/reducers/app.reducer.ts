import { combineReducers, Reducer } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import * as fromMenu from './menu.reducer';
import * as fromProfile from './profile.reducer';
import * as fromUI from './ui.reducer';
import * as fromTracks from './tracks.reducer';

export interface State {
  router: RouterState;
  menu: fromMenu.State;
  profile: fromProfile.State;
  ui: fromUI.State;
  tracks: fromTracks.State;
}

export const appReducer: Reducer<State> = combineReducers<State>({
  router: routerReducer,
  menu: fromMenu.reducer,
  profile: fromProfile.reducer,
  ui: fromUI.reducer,
  tracks: fromTracks.reducer
});
