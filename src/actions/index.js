/**
 * Created by jedabero on 30/01/17.
 */

export const AGREGAR_GRUPO = 'AGREGAR_GRUPO';
export const ACTUALIZAR_GRUPO = 'ACTUALIZAR_GRUPO';
export const RECOGER_ESTADISTICAS = 'RECOGER_ESTADISTICAS';

let grupoId = 0;
export function agregarGrupo(nombre: string) {
  return {
    type: AGREGAR_GRUPO,
    id: grupoId++,
    estado: 1,
    nombre
  }
}

export function actualizarGrupo(id: number, estado: number, nombre: string) {
  return {
    type: ACTUALIZAR_GRUPO,
    id, estado, nombre
  }
}


export function recogerEstadisticas() {
  return {
    type: RECOGER_ESTADISTICAS
  }
} 