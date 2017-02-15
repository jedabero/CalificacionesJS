/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {agregarNota} from '../actions';
import Nota from '../shape';
import ListaNota from '../components/ListaNota';
import FormularioNota from './FormularioNota';
import './Notas.css';

const Notas = ({children, notas, onGuardar, onNotaClick}) => {
  return (
    <div className="modulo-notas">
      <h3>Notas</h3>
      <FormularioNota nombreLabel="Nueva nota" onGuardar={onGuardar}/>
      <ListaNota notas={notas} onNotaClick={onNotaClick}/>
      {children}
    </div>
  );
};

Notas.propTypes = {
  notas: PropTypes.arrayOf(Nota.isRequired).isRequired,
  onGuardar: PropTypes.func,
  onNotaClick: PropTypes.func
};

const mapStateToProps = ({notas}, {params}) => {
  const asignaturaId = parseInt(params.asignaturaId, 10);
  return {
    notas: notas.filter(n => n.asignatura_id === asignaturaId)
  }
};

const mapDispatchToProps = (dispatch, {router, params}) => {
  const {grupoId, periodoId, asignaturaId} = params;
  return {
    onGuardar: (valor, peso, orden) => {
      const asignatura_id = parseInt(asignaturaId, 10);
      dispatch(agregarNota(valor, peso, orden, asignatura_id));
    },
    onNotaClick: nota => {
      router.push(`/grupos/${grupoId}/periodos/${periodoId}/asignaturas/${nota.asignatura_id}/notas/${nota.id}`);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notas);