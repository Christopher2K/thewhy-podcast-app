import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './assets/styles/base.global.scss';

import {
    Provider,
    Store
} from 'react-redux';
import {
    applyMiddleware,
    createStore,
    Middleware
} from 'redux';
import { Switch } from 'react-router';
import  { Route } from 'react-router-dom';
import {
    ConnectedRouter,
    routerMiddleware
} from 'react-router-redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { appReducer } from './reducers/app-state.reducer';
import { History } from 'history';
import {
    AppState,
    INITIAL_APP_STATE
} from './states/app-state.model';


import MenuContainer from './components/smarts/menu-container.component';
import HomePage from './components/home-page.component';
import ConceptPage from './components/concept-page.component';
import PodcastsPage from './components/podcasts-page.component';
import NotFoundPage  from './components/not-found-page.component';

const history: History      = createHistory();
const routerMid: Middleware = routerMiddleware(history);

let store: Store<AppState> = createStore(
    appReducer,
    INITIAL_APP_STATE,
    composeWithDevTools(
        applyMiddleware(routerMid)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <div id="app">
            <MenuContainer />
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/concept" component={ConceptPage}/>
                    <Route path="/podcasts" component={PodcastsPage}/>
                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </ConnectedRouter>
        </div>
    </Provider>,
    document.querySelector('#root')
)
;