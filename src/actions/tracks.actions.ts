import { ActionFactory, Track } from '../types';

const GET_TRACKS_REQUEST: string = '[Tracks][Fanburst][Xhr] Get tracks from Fanburst';
const GET_TRACKS_SUCCESS: string = '[Tracks][Fanburst][Xhr] Successfuly got the tracks fro Fanburst';
const GET_TRACKS_ERROR: string = '[Tracks][Fanburst][Xhr] Error when trying to get the tracks from Fanburst';

export const getTracksRequest: ActionFactory<number | null> = (pagination: number = 1) =>
  ({ type: GET_TRACKS_REQUEST });
export const getTracksSuccess: ActionFactory<Track[]> = (tracks: Track[]) =>
  ({ type: GET_TRACKS_SUCCESS, payload: tracks });
export const getTracksError: ActionFactory = () => ({ type: GET_TRACKS_ERROR });

export default {
  GET_TRACKS_REQUEST,
  GET_TRACKS_SUCCESS,
  GET_TRACKS_ERROR,
};
