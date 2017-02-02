import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import throttle from 'lodash/throttle';

import Root from './Root';
import {loadState, saveState} from './localStore';
import appReducer from './reducers/index';
import './index.css';

const persistedState = loadState();

const store = createStore(appReducer, persistedState);

store.subscribe(throttle(() => saveState(store.getState()), 5000));

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
