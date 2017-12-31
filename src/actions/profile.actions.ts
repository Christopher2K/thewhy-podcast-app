import { ActionFactory, Profile } from '../types';

const GET_PROFILE_REQUEST: string = '[Profile][Fanburst][Xhr] Get profile from Fanburst';
const GET_PROFILE_SUCCESS: string = '[Profile][Fanburst][Xhr] Successfuly got the profile from Fanburst';
const GET_PROFILE_ERROR: string = '[Profile][Fanburst][Xhr] Error when trying to get the profile';

export const getProfileRequest: ActionFactory<string> = (profileId: string) =>
  ({ type: GET_PROFILE_REQUEST, payload: profileId });
export const getProfileSuccess: ActionFactory<Profile> = (profile: Profile) =>
  ({ type: GET_PROFILE_SUCCESS, payload: profile });
export const getProfileError: ActionFactory = () => ({ type: GET_PROFILE_ERROR });

export default {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR
};
