/**
 * Created by jedabero on 30/01/17.
 */
import {AGREGAR_GRUPO, ACTUALIZAR_GRUPO} from '../Grupos/actions';

function grupo(state = {}, action) {
  switch (action.type) {
    case AGREGAR_GRUPO:
      return {
        id: action.id,
        estado: action.estado,
        nombre: action.nombre
      };
    case ACTUALIZAR_GRUPO:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        estado: action.estado,
        nombre: action.nombre
      });
    default:
      return state;
  }
}

function grupos(state = [], action) {
  switch (action.type) {
    case AGREGAR_GRUPO:
      return [...state, grupo(undefined, action)];
    case ACTUALIZAR_GRUPO:
      return state.map(g => grupo(g, action));
    default:
      return state;
  }
}

export default grupos;