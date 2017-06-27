import {
    combineReducers,
    Reducer
} from 'redux';
import { AppState } from '../states/app-state.model';
import { menuReducer } from './menu-state.reducer';

export const appReducer: Reducer<AppState> = combineReducers<AppState>({
    menu: menuReducer
});