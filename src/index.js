import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import Root from './Root';
import './index.css';

const store = createStore((state = { }, action) => {
  switch (action.type) {
    default:
      return state
  }
});

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
