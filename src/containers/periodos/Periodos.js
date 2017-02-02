/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {agregarPeriodo} from '../../actions/periodos';
import Periodo from '../../shapes/Periodo';
import ListaPeriodo from '../../components/periodos/ListaPeriodo';
import FormularioPeriodo from './FormularioPeriodo';
import './Periodos.css';

const Periodos = ({children, periodos, onGuardar, onPeriodoClick}) => {
  return (
    <div className="modulo-periodos">
      <h3>Periodos</h3>
      <FormularioPeriodo nombreLabel="Nuevo periodo" onGuardar={onGuardar}/>
      <ListaPeriodo periodos={periodos} onPeriodoClick={onPeriodoClick}/>
      {children}
    </div>
  );
};

Periodos.propTypes = {
  periodos: PropTypes.arrayOf(Periodo.isRequired).isRequired,
  onGuardar: PropTypes.func,
  onPeriodoClick: PropTypes.func
};

const mapStateToProps = ({periodos}, {params}) => {
  const grupoId = parseInt(params.grupoId, 10);
  return {
    periodos: periodos.filter(p => p.grupo_id === grupoId)
  }
};

const mapDispatchToProps = (dispatch, {router, params}) => {
  return {
    onGuardar: (nombre, orden) => {
      const grupoId = parseInt(params.grupoId, 10);
      dispatch(agregarPeriodo(nombre, orden, grupoId));
    },
    onPeriodoClick: periodo => {
      router.push(`/grupos/${periodo.grupo_id}/periodos/${periodo.id}`);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Periodos);