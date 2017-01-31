/**
 * Created by jedabero on 30/01/17.
 */
import {combineReducers} from 'redux';

import grupos from './grupos';
import periodos from './periodos';
import asignaturas from './asignaturas';
import notas from './notas';

const appReducer = combineReducers({
  grupos, periodos, asignaturas, notas
});

export default appReducer;