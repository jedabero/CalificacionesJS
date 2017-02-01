/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import './ItemGrupo.css';

const ItemGrupo = ({id, estado, nombre, onClick}) => (
  <li className={`item-grupo${estado === 1 ? "" : " disabled" }`}
    onClick={onClick} >
    <span className="badge">{id}</span> {nombre}
  </li>
);

ItemGrupo.propTypes = {
  id: PropTypes.number,
  estado: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ItemGrupo;