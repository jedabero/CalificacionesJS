/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import Periodo from '../../shapes/Periodo';
import './ItemPeriodo.css';

const ItemPeriodo = ({periodo, onClick}) => (
  <li className={`item-periodo${periodo.estado === 1 ? "" : " disabled" }`}
    onClick={onClick} >
    <span className="badge">{periodo.id}</span>
    {periodo.nombre}
    <span className="badge">{periodo.orden}</span>
  </li>
);

ItemPeriodo.propTypes = {
  periodo: Periodo.isRequired,
  onClick: PropTypes.func
};

export default ItemPeriodo;