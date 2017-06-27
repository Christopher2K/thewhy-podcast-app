import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    Provider,
    Store
} from 'react-redux';
import { createStore } from 'redux';

import App from './components/app.component';
import './assets/styles/base.global.scss';
import { appReducer } from './reducers/app-state.reducer';
import {
    AppState,
    INITIAL_APP_STATE
} from './states/app-state.model';
import {
    composeWithDevTools,
} from 'redux-devtools-extension';


let store: Store<AppState> = createStore(appReducer, INITIAL_APP_STATE, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);