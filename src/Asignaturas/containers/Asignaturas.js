/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {agregarAsignatura} from '../actions';
import Asignatura from '../shape';
import ListaAsignatura from '../components/ListaAsignatura';
import FormularioAsignatura from './FormularioAsignatura';
import './Asignaturas.css';

const Asignaturas = ({children, asignaturas, onGuardar, onAsignaturaClick}) => {
  return (
    <div className="modulo-asignaturas">
      <h3>Asignaturas</h3>
      <FormularioAsignatura nombreLabel="Nueva asignatura" onGuardar={onGuardar}/>
      <ListaAsignatura asignaturas={asignaturas} onAsignaturaClick={onAsignaturaClick}/>
      {children}
    </div>
  );
};

Asignaturas.propTypes = {
  asignaturas: PropTypes.arrayOf(Asignatura.isRequired).isRequired,
  onGuardar: PropTypes.func,
  onAsignaturaClick: PropTypes.func
};

const mapStateToProps = ({asignaturas}, {params}) => {
  const periodoId = parseInt(params.periodoId, 10);
  return {
    asignaturas: asignaturas.filter(a => a.periodo_id === periodoId)
  }
};

const mapDispatchToProps = (dispatch, {router, params}) => {
  const {grupoId, periodoId} = params;
  return {
    onGuardar: (nombre, codigo, peso) => {
      const periodo_id = parseInt(periodoId, 10);
      dispatch(agregarAsignatura(nombre, codigo, peso, periodo_id));
    },
    onAsignaturaClick: asignatura => {
      router.push(`/grupos/${grupoId}/periodos/${asignatura.periodo_id}/asignaturas/${asignatura.id}`);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Asignaturas);