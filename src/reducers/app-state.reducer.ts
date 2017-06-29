import {
    combineReducers,
    Reducer
} from 'redux';
import { AppState } from '../states/app-state.model';
import { menuReducer } from './menu-state.reducer';
import { routerReducer } from 'react-router-redux';

export const appReducer: Reducer<AppState> = combineReducers<AppState>({
    router: routerReducer,
    menu: menuReducer
});