import {
    INITIAL_MENU_STATE,
    MenuState
} from '../states/menu-state.model';
import * as Actions from '../actions/menu-state.action';
import * as _ from 'lodash';
import { Action } from '../actions/action.model';
import { Reducer } from 'redux';

export const menuReducer: Reducer<MenuState> = (state: MenuState = INITIAL_MENU_STATE, action: Action) => {
    switch (action.type) {
        case Actions.OPEN_MENU:
            return openMenu(state);

        case Actions.CLOSE_MENU:
            return closeMenu(state);

        default:
            return state;
    }
};

const openMenu = (state: MenuState): MenuState => {
    let newState: MenuState = _.cloneDeep(state);
    newState.opened = true;

    return newState;
};

const closeMenu = (state: MenuState): MenuState => {
    let newState: MenuState = _.cloneDeep(state);
    newState.opened = false;

    return newState;
};
