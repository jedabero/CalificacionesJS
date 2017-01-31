/**
 * Created by jedabero on 30/01/17.
 */
import {AGREGAR_PERIODO, ACTUALIZAR_PERIODO} from '../actions/periodos';

function periodo(state = {}, action) {
  switch (action.type) {
    case AGREGAR_PERIODO:
      return {
        id: action.id,
        estado: action.estado,
        nombre: action.nombre,
        orden: action.orden,
        grupo_id: action.grupo_id
      };
    case ACTUALIZAR_PERIODO:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        estado: action.estado,
        nombre: action.nombre,
        orden: action.orden,
        grupo_id: action.grupo_id
      });
    default:
      return state;
  }
}

function periodos(state = [], action) {
  switch (action.type) {
    case AGREGAR_PERIODO:
      return [...state, periodo(undefined, action)];
    case ACTUALIZAR_PERIODO:
      return state.map(g => periodo(g, action));
    default:
      return state;
  }
}

export default periodos;