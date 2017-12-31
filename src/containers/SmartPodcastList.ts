import { connect, Dispatch, MapStateToProps } from 'react-redux';
import { PodcastList, PodcastListProps } from '../components';
import { closeMenu, openMenu } from '../actions/menu.actions';
import { AppState } from '../reducers';

const mapStateToProps: MapStateToProps<PodcastListProps, null> = (state: AppState) => ({ tracks: state.tracks.list });

export default connect(mapStateToProps, {})(PodcastList);
