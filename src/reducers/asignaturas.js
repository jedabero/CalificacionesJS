/**
 * Created by jedabero on 30/01/17.
 */
import {AGREGAR_ASIGNATURA, ACTUALIZAR_ASIGNATURA} from '../actions/asignaturas';

function asignatura(state = {}, action) {
  switch (action.type) {
    case AGREGAR_ASIGNATURA:
      return {
        id: action.id,
        estado: action.estado,
        nombre: action.nombre,
        peso: action.peso,
        periodo_id: action.periodo_id
      };
    case ACTUALIZAR_ASIGNATURA:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        estado: action.estado,
        nombre: action.nombre,
        peso: action.peso,
        periodo_id: action.periodo_id
      });
    default:
      return state;
  }
}

function asignaturas(state = [], action) {
  switch (action.type) {
    case AGREGAR_ASIGNATURA:
      return [...state, asignatura(undefined, action)];
    case ACTUALIZAR_ASIGNATURA:
      return state.map(a => asignatura(a, action));
    default:
      return state;
  }
}

export default asignaturas;