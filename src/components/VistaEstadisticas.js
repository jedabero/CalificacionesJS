/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import './VistaEstadisticas.css';

const VistaEstadisticas = ({estadisticas}) => (
  <ul className="estadisticas">
    <li>Grupos <span className="badge">{estadisticas.grupos}</span></li>
    <li>Periodos <span className="badge">{estadisticas.periodos}</span></li>
    <li>Asignaturas <span className="badge">{estadisticas.asignaturas}</span></li>
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