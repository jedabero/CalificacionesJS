/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import Nota from '../shape';
import './ItemNota.css';

const ItemNota = ({nota, onClick}) => (
  <li className={`item-nota${nota.estado === 1 ? "" : " disabled" }`}
    onClick={onClick} >
    <span className="badge">{nota.id}</span>
    {nota.orden} - {nota.valor}
    <span className="badge">{nota.peso}</span>
  </li>
);

ItemNota.propTypes = {
  nota: Nota.isRequired,
  onClick: PropTypes.func
};

export default ItemNota;