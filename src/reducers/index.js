/**
 * Created by jedabero on 30/01/17.
 */
import {combineReducers} from 'redux';

import grupos from './grupos';
import periodos from './periodos';

const appReducer = combineReducers({
  grupos, periodos
});

export default appReducer;