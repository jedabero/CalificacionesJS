/**
 * Created by jedabero on 31/01/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

import {actualizarAsignatura} from '../actions';
import Asignatura from '../shape';
import FormularioAsignatura from './FormularioAsignatura';
import './DetalleAsignatura.css';

const DetalleAsignatura = ({children, asignatura, onGuardar, params}) => {
  const {id, estado, nombre, codigo, peso, periodo_id} = asignatura;
  const handleGuardar = (nombre, codigo, peso) => onGuardar(id, estado, nombre, codigo, peso);
  return (
    <div className="modulo-asignatura">
      <h4>Asignatura #{id}</h4>
      <div className="nombre-asignatura">{nombre} - {codigo} <span className="badge">{peso}</span></div>
      <FormularioAsignatura
        editing
        nombre={nombre}
        codigo={codigo}
        peso={peso}
        onGuardar={handleGuardar}
      />
      {
        children ||
        <div className="ver-notas">
          <Link to={`/grupos/${params.grupoId}/periodos/${periodo_id}/asignaturas/${id}/notas`}>Ver notas</Link>
        </div>
      }
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const periodoId = parseInt(props.params.periodoId, 10),
    asignaturaId = parseInt(props.params.asignaturaId, 10),
    asignatura = state.asignaturas.find(a => a.periodo_id === periodoId && a.id === asignaturaId);
  return { asignatura }
};

const mapDispatchToProps = dispatch => {
  return {
    onGuardar: (id, estado, nombre, codigo, peso) => {
      dispatch(actualizarAsignatura(id, estado, nombre, codigo, peso));
    }
  }
};

DetalleAsignatura.propTypes = {
  asignatura: Asignatura
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleAsignatura);