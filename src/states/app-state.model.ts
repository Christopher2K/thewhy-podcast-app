import {
    INITIAL_MENU_STATE,
    MenuState
} from './menu-state.model';
import { RouterState } from 'react-router-redux';

export interface AppState {
    router: RouterState,
    menu: MenuState,
}

export const INITIAL_APP_STATE: AppState = {
    router: null,
    menu  : INITIAL_MENU_STATE,
}