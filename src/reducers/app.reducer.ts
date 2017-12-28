import { combineReducers, Reducer } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import * as fromMenu from './menu.reducer';

export interface State {
  router: RouterState;
  menu: fromMenu.State;
}

export const appReducer: Reducer<State> = combineReducers<State>({
  router: routerReducer,
  menu: fromMenu.reducer
});
