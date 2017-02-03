/**
 * Created by jedabero on 31/01/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

import {actualizarPeriodo} from '../actions';
import Periodo from '../shape';
import FormularioPeriodo from './FormularioPeriodo';
import './DetallePeriodo.css';

const DetallePeriodo = ({children, periodo, onGuardar}) => {
  const handleGuardar = (nombre, orden) => onGuardar(periodo.id, periodo.estado, nombre, orden);
  return (
    <div className="modulo-periodo">
      <h4>Periodo #{periodo.id}</h4>
      <div className="nombre-periodo">{periodo.nombre} <span className="badge">{periodo.orden}</span></div>
      <FormularioPeriodo
        editing
        nombre={periodo.nombre}
        orden={periodo.orden}
        onGuardar={handleGuardar}
      />
      {
        children ||
        <div className="ver-asignaturas">
          <Link to={`/grupos/${periodo.grupo_id}/periodos/${periodo.id}/asignaturas`}>Ver asignaturas</Link>
        </div>
      }
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const grupoId = parseInt(props.params.grupoId, 10),
    periodoId = parseInt(props.params.periodoId, 10),
    periodo = state.periodos.find(p => p.grupo_id === grupoId && p.id === periodoId);
  return { periodo }
};

const mapDispatchToProps = dispatch => {
  return {
    onGuardar: (id, estado, nombre, orden) => {
      dispatch(actualizarPeriodo(id, estado, nombre, orden));
    }
  }
};

DetallePeriodo.propTypes = {
  periodo: Periodo
};

export default connect(mapStateToProps, mapDispatchToProps)(DetallePeriodo);