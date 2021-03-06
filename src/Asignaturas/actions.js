/**
 * Created by jedabero on 30/01/17.
 */
import {ids} from '../localStore';

export const AGREGAR_ASIGNATURA = 'AGREGAR_ASIGNATURA';
export const ACTUALIZAR_ASIGNATURA = 'ACTUALIZAR_ASIGNATURA';

export function agregarAsignatura(nombre, codigo, peso, periodo_id) {
  return {
    type: AGREGAR_ASIGNATURA,
    id: ++ids.asignaturaId,
    estado: 1,
    nombre, codigo, peso, periodo_id
  }
}

export function actualizarAsignatura(id, estado, nombre, codigo, peso) {
  return {
    type: ACTUALIZAR_ASIGNATURA,
    id, estado, nombre, codigo, peso
  }
}
