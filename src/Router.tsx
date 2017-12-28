import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { History } from 'history';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import * as Pages from './pages';
import SmartMenu from './containers/SmartMenu';

interface Props {
  history: History;
}

const Router: React.SFC<Props> = ({ history }) => (
  <ConnectedRouter history={history}>
    <div id="app">
      <SmartMenu />
      <Switch>
        <Route exact path="/" component={Pages.HomePage} />
        <Route exact path="/concept" component={Pages.ConceptPage} />
        <Route path="/podcasts" component={Pages.PodcastsPage} />
        <Route path="*" component={Pages.NotFoundPage} />
      </Switch>
    </div>
  </ConnectedRouter>
);

export default Router;
