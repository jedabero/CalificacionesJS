/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import Asignatura from '../shape';
import './ItemAsignatura.css';

const ItemAsignatura = ({asignatura, onClick}) => (
  <li className={`item-asignatura${asignatura.estado === 1 ? "" : " disabled" }`}
    onClick={onClick} >
    <span className="badge">{asignatura.id}</span>
    {asignatura.nombre}
    <span className="badge">{asignatura.peso}</span>
  </li>
);

ItemAsignatura.propTypes = {
  asignatura: Asignatura.isRequired,
  onClick: PropTypes.func
};

export default ItemAsignatura;