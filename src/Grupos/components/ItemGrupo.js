/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import Grupo from '../shape';
import './ItemGrupo.css';

const ItemGrupo = ({grupo, onClick}) => (
  <li className={`item-grupo${grupo.estado === 1 ? "" : " disabled" }`}
    onClick={onClick} >
    <span className="badge">{grupo.id}</span> {grupo.nombre}
  </li>
);

ItemGrupo.propTypes = {
  grupo: Grupo.isRequired,
  onClick: PropTypes.func
};

export default ItemGrupo;