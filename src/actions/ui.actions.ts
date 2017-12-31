import { ActionFactory } from '../types';

const STOP_INITIAL_LOADING: string = '[UI] Stop initial loading';

export const stopInitialLoading: ActionFactory = () => ({ type: STOP_INITIAL_LOADING });

export default {
  STOP_INITIAL_LOADING
};
