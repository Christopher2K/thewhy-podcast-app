import { Action } from '../types';
import { combineEpics, ActionsObservable } from 'redux-observable';
import { Store } from 'redux';
import Axios, { AxiosResponse } from 'axios';
import { AppState } from '../reducers';
import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';
import { stopInitialLoading } from '../actions/ui.actions';
import TracksActions, { getTracksRequest, getTracksSuccess } from '../actions/tracks.actions';
import UIActions from '../actions/ui.actions';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { combineLatest } from 'rxjs/observable/combineLatest';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import { FANBURST_NAME, FANBURST_CLIENT_ID, FANBURST_API_URL, FANBURST_API_VERSION } from '../settings';

const triggerInitialGetTracks$ = (actions$: ActionsObservable<Action<any>>, store: Store<AppState>) =>
  combineLatest(
    actions$.ofType(LOCATION_CHANGE)
      .filter((action: LocationChangeAction) => action.payload.pathname === '/podcasts'),
    actions$.ofType(UIActions.STOP_INITIAL_LOADING)
  )
  .filter(([action1, action2]) => Boolean(action1) && Boolean(action2))
  .mapTo(getTracksRequest());

const getTracks$ = (actions$: ActionsObservable<Action<any>>, store: Store<AppState>) =>
  actions$.ofType(TracksActions.GET_TRACKS_REQUEST)
    .switchMap(() => {
      const id: string = store.getState().profile.id;
      return fromPromise(
        Axios.get(`${FANBURST_API_URL}users/${id}/tracks?per_page=100&client_id=${FANBURST_CLIENT_ID}`)
          .then((response: AxiosResponse) => response.data)
      );
    })
    .map((tracks: any[]) => getTracksSuccess(
      tracks.map((track: any) => ({
        id: track.id,
        title: track.title,
        date: new Date(track.published_at).getTime(),
        imageUrl: track.images.square_500,
        streamUrl: `${track.stream_url}?client_id=${FANBURST_CLIENT_ID}`
      }))
    ));

export default combineEpics(
  triggerInitialGetTracks$,
  getTracks$
);
