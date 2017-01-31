/**
 * Created by jedabero on 30/01/17.
 */

export const AGREGAR_PERIODO = 'AGREGAR_PERIODO';
export const ACTUALIZAR_PERIODO = 'ACTUALIZAR_PERIODO';

let periodoId = 0;
export function agregarPeriodo(nombre, orden, grupo_id) {
  return {
    type: AGREGAR_PERIODO,
    id: periodoId++,
    estado: 1,
    nombre, orden, grupo_id
  }
}

export function actualizarPeriodo(id, estado, nombre, orden, grupo_id) {
  return {
    type: ACTUALIZAR_PERIODO,
    id, estado, nombre, orden, grupo_id
  }
}
