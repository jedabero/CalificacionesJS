/**
 * Created by jedabero on 30/01/17.
 */

export const AGREGAR_ASIGNATURA = 'AGREGAR_ASIGNATURA';
export const ACTUALIZAR_ASIGNATURA = 'ACTUALIZAR_ASIGNATURA';

let asignaturaId = 0;
export function agregarAsignatura(nombre, peso, periodo_id) {
  return {
    type: AGREGAR_ASIGNATURA,
    id: asignaturaId++,
    estado: 1,
    nombre, peso,periodo_id
  }
}

export function actualizarAsignatura(id, estado, nombre, peso, periodo_id) {
  return {
    type: ACTUALIZAR_ASIGNATURA,
    id, estado, nombre, peso, periodo_id
  }
}
