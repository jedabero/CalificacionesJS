/**
 * Created by jedabero on 30/01/17.
 */
import {AGREGAR_NOTA, ACTUALIZAR_NOTA} from '../actions/notas';

function nota(state = {}, action) {
  switch (action.type) {
    case AGREGAR_NOTA:
      return {
        id: action.id,
        estado: action.estado,
        valor: action.valor,
        peso: action.peso,
        orden: action.orden,
        asignatura_id: action.asignatura_id
      };
    case ACTUALIZAR_NOTA:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        estado: action.estado,
        valor: action.valor,
        peso: action.peso,
        orden: action.orden,
        asignatura_id: action.asignatura_id
      });
    default:
      return state;
  }
}

function notas(state = [], action) {
  switch (action.type) {
    case AGREGAR_NOTA:
      return [...state, nota(undefined, action)];
    case ACTUALIZAR_NOTA:
      return state.map(n => nota(n, action));
    default:
      return state;
  }
}

export default notas;