/**
 * Created by jedabero on 31/01/17.
 */
import React from 'react';
import {connect} from 'react-redux';

import {actualizarNota} from '../actions';
import Nota from '../shape';
import FormularioNota from './FormularioNota';
import './DetalleNota.css';

const DetalleNota = ({nota, onGuardar}) => {
  const {id, estado, valor, peso, orden} = nota;
  const handleGuardar = (valor, peso, orden) => onGuardar(id, estado, valor, peso, orden);
  return (
    <div className="modulo-nota">
      <h4>Nota #{id}</h4>
      <div>{orden} - {valor} <span className="badge">{peso}</span></div>
      <FormularioNota
        editing
        valor={valor}
        peso={peso}
        orden={orden}
        onGuardar={handleGuardar}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const asignaturaId = parseInt(props.params.asignaturaId, 10),
    notaId = parseInt(props.params.notaId, 10),
    nota = state.notas.find(n => n.asignatura_id === asignaturaId && n.id === notaId);
  return { nota }
};

const mapDispatchToProps = dispatch => {
  return {
    onGuardar: (id, estado, valor, peso, orden) => {
      dispatch(actualizarNota(id, estado, valor, peso, orden));
    }
  }
};

DetalleNota.propTypes = {
  nota: Nota
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleNota);