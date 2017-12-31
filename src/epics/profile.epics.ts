import { Action } from '../types';
import { combineEpics, ActionsObservable } from 'redux-observable';
import Axios, { AxiosResponse } from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import ProfileActions, { getProfileSuccess } from '../actions/profile.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/switchMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { FANBURST_NAME, FANBURST_CLIENT_ID, FANBURST_API_URL, FANBURST_API_VERSION } from '../settings';

const getProfile$ = (actions$: ActionsObservable<Action<any>>) =>
  actions$.ofType(LOCATION_CHANGE)
    .first()
    .switchMap(() =>
      fromPromise(
        Axios.get(`${FANBURST_API_URL}users/search/?query=${FANBURST_NAME}&client_id=${FANBURST_CLIENT_ID}`)
          .then((response: AxiosResponse) => response.data)
      )
    )
    .map(([profile]: any) => getProfileSuccess({
      id: profile.id,
      name: profile.name,
      url: profile.url
    }));

export default combineEpics(getProfile$);
