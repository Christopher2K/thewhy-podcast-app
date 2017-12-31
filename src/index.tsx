import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './assets/styles/base.global.scss';

import { Provider, Store } from 'react-redux';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { AppState, reducer } from './reducers';
import { History } from 'history';
import Router from './Router';
import loggerMid from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';

const history: History = createHistory();
const routerMid: Middleware = routerMiddleware(history);
const epicMid: Middleware = createEpicMiddleware(rootEpic);

const store: Store<AppState> = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(routerMid, epicMid, loggerMid)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>,
  document.querySelector('#root')
);
