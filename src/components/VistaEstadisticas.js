/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

export class Estadisticas {
  grupos: number;
  periodos: number;
  asignaturas: number;
  constructor(grupos: number, periodos: number, asignaturas: number) {
    this.grupos = grupos;
    this.periodos = periodos;
    this.asignaturas = asignaturas;
  }
}

const VistaEstadisticas = ({estadisticas}) => (
  <ul>
    <li>Grupos <span>{estadisticas.grupos}</span></li>
    <li>Periodos <span>{estadisticas.periodos}</span></li>
    <li>Asignaturas <span>{estadisticas.asignaturas}</span></li>
  </ul>
);

VistaEstadisticas.propTypes = {
  estadisticas: PropTypes.instanceOf(Estadisticas).isRequired
};

export default VistaEstadisticas;