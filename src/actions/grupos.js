/**
 * Created by jedabero on 30/01/17.
 */

export const AGREGAR_GRUPO = 'AGREGAR_GRUPO';
export const ACTUALIZAR_GRUPO = 'ACTUALIZAR_GRUPO';

let grupoId = 0;
export function agregarGrupo(nombre) {
  return {
    type: AGREGAR_GRUPO,
    id: grupoId++,
    estado: 1,
    nombre
  }
}

export function actualizarGrupo(id, estado, nombre) {
  return {
    type: ACTUALIZAR_GRUPO,
    id, estado, nombre
  }
}
