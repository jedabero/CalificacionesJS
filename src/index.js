import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import Root from './Root';
import appReducer from './reducers/index';
import './index.css';

const store = createStore(appReducer);

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);