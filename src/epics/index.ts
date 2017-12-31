import { combineEpics } from 'redux-observable';
import profileEpics from './profile.epics';
import uiEpics from './ui.epics';
import tracksEpics from './tracks.epics';

export default combineEpics(profileEpics, uiEpics, tracksEpics);
