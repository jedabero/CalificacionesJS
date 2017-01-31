/**
 * Created by jedabero on 30/01/17.
 */

export const AGREGAR_NOTA = 'AGREGAR_NOTA';
export const ACTUALIZAR_NOTA = 'ACTUALIZAR_NOTA';

let notaId = 0;
export function agregarNota(valor, peso, orden, asignatura_id) {
  return {
    type: AGREGAR_NOTA,
    id: notaId++,
    estado: 1,
    valor, peso, orden, asignatura_id
  }
}

export function actualizarNota(id, estado, valor, peso, orden, asignatura_id) {
  return {
    type: ACTUALIZAR_NOTA,
    id, estado, valor, peso, orden, asignatura_id
  }
}
