import { ActionFactory } from '../types';

const OPEN_MENU: string = '[Menu] Open the menu';
const CLOSE_MENU: string = '[Menu] Close the menu';

export const openMenu: ActionFactory = () => ({ type: OPEN_MENU });
export const closeMenu: ActionFactory = () => ({ type: CLOSE_MENU });

export default {
  OPEN_MENU,
  CLOSE_MENU
};
