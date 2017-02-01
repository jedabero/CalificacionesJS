/**
 * Created by jedabero on 31/01/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

import {actualizarGrupo} from '../../actions/grupos';
import Grupo from '../../shapes/Grupo';
import FormularioGrupo from './FormularioGrupo';

const DetalleGrupo = ({children, grupo, onGuardar}) => children || (
  <div>
    <div>Grupo #{grupo.id}</div>
    <div>{grupo.nombre}</div>
    <FormularioGrupo editing nombre={grupo.nombre} onGuardar={nombre => onGuardar(grupo.id, grupo.estado, nombre)}/>
    {children || <Link to={`/grupos/${grupo.id}/periodos`}>Ver periodos</Link>}
  </div>
);

const mapStateToProps = (state, props) => {
  const {grupoId} = props.params,
    id = parseInt(grupoId, 10),
    grupo = state.grupos.find(g => g.id === id);
  return { grupo }
};

const mapDispatchToProps = dispatch => {
  return {
    onGuardar: (id, estado, nombre) => {
      dispatch(actualizarGrupo(id, estado, nombre));
    }
  }
};

DetalleGrupo.propTypes = {
  grupo: Grupo
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleGrupo);