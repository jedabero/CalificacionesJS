/**
 * Created by jedabero on 30/01/17.
 */
import {ids} from '../localStore';

export const AGREGAR_GRUPO = 'AGREGAR_GRUPO';
export const ACTUALIZAR_GRUPO = 'ACTUALIZAR_GRUPO';

export function agregarGrupo(nombre) {
  return {
    type: AGREGAR_GRUPO,
    id: ++ids.grupoId,
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
