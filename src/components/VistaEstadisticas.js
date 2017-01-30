/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

const VistaEstadisticas = ({estadisticas}) => (
  <ul>
    <li>Grupos <span>{estadisticas.grupos}</span></li>
    <li>Periodos <span>{estadisticas.periodos}</span></li>
    <li>Asignaturas <span>{estadisticas.asignaturas}</span></li>
  </ul>
);

VistaEstadisticas.propTypes = {
  estadisticas: PropTypes.shape({
    grupos: PropTypes.number.isRequired,
    periodos: PropTypes.number.isRequired,
    asignaturas: PropTypes.number.isRequired,
  }).isRequired
};

export default VistaEstadisticas;