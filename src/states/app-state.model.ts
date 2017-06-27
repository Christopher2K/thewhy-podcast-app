import {
    INITIAL_MENU_STATE,
    MenuState
} from './menu-state.model';

export interface AppState {
    menu: MenuState,
}

export const INITIAL_APP_STATE: AppState = {
    menu: INITIAL_MENU_STATE
};