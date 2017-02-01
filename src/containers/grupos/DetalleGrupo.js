/**
 * Created by jedabero on 31/01/17.
 */
import React from 'react';
import {connect} from 'react-redux';

import Grupo from '../../shapes/Grupo';

const DetalleGrupo = ({children, grupo}) => children || (
  <div>
    <div>Grupo #{grupo.id}</div>
    <div>{grupo.nombre}</div>
  </div>
);

const mapStateToProps = (state, props) => {
  const {location, params} = props;
  let grupo;
  if (location.state) {
    grupo = location.state;
  } else {
    const {grupoId} = params;
    grupo = state.grupos.find(g => g.id === grupoId)
  }
  return {
    grupo
  }
};

DetalleGrupo.propTypes = {
  grupo: Grupo.isRequired
};

export default connect(mapStateToProps)(DetalleGrupo);