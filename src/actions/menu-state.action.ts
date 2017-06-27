import { ActionFactory } from './action.model';

export const OPEN_MENU: string  = '[Menu] Open the menu';
export const CLOSE_MENU: string = '[Menu] Close the menu';

export const openMenu: ActionFactory = () => ({type: OPEN_MENU});
export const closeMenu: ActionFactory = () => ({type: CLOSE_MENU});