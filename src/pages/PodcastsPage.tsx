import * as React from 'react';
import '../assets/styles/components/_podcasts.scss';

import { Podcast } from '../components';
import { SmartPodcastList } from '../containers';

export const PodcastsPage: React.SFC = (): JSX.Element => (
  <div className="podcasts page">
    <h1 className="podcasts__title">Podcasts</h1>
    <SmartPodcastList />
  </div>
);

export default PodcastsPage;
