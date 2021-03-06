/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {agregarGrupo} from '../actions';
import Grupo from '../shape';
import ListaGrupo from '../components/ListaGrupo';
import FormularioGrupo from './FormularioGrupo';
import './Grupos.css';

const Grupos = ({children, grupos, onGuardar, onGrupoClick}) => {
  return (
    <div className="modulo-grupos">
      <h2>Grupos</h2>
      <FormularioGrupo nombreLabel="Nuevo grupo" onGuardar={onGuardar}/>
      <ListaGrupo grupos={grupos} onGrupoClick={onGrupoClick}/>
      {children}
    </div>
  );
};

Grupos.propTypes = {
  grupos: PropTypes.arrayOf(Grupo.isRequired).isRequired,
  onGuardar: PropTypes.func,
  onGrupoClick: PropTypes.func
};

const mapStateToProps = state => {
  return {
    grupos: state.grupos
  }
};

const mapDispatchToProps = (dispatch, {router}) => {
  return {
    onGuardar: (nombre) => {
      dispatch(agregarGrupo(nombre));
    },
    onGrupoClick: grupo => {
      router.push(`/grupos/${grupo.id}`);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Grupos);