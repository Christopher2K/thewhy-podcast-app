import { Action } from '../types';
import { combineEpics, ActionsObservable } from 'redux-observable';
import { stopInitialLoading } from '../actions/ui.actions';
import ProfileActions from '../actions/profile.actions';
import 'rxjs/add/operator/mapTo';

const stopInitialLoading$ = (actions$: ActionsObservable<Action<any>>) =>
  actions$.ofType(ProfileActions.GET_PROFILE_SUCCESS)
    .mapTo(stopInitialLoading());

export default combineEpics(stopInitialLoading$);
