import * as React from 'react';
import { Track } from '../types';
import Podcast from './Podcast';
import '../assets/styles/components/_podcastList.scss';

export interface Props {
  tracks: Track[];
}

const PodcastList: React.SFC<Props> = ({ tracks }): JSX.Element => (
  <div className="podcast__list">
    {
      tracks.map((track: Track) => <Podcast key={track.id} {...track} />)
    }
  </div>
);

export default PodcastList;
