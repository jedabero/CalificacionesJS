import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import Root from './Root';
import appReducer from './reducers/index';
import './index.css';

const state = localStorage.getItem('state');
const persistedState = state ? JSON.parse(state) : {};

const store = createStore(appReducer, persistedState);

/*let unsubscribe = */store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
