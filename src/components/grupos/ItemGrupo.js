/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

const ItemGrupo = ({id, estado, nombre, onClick}) => (
  <li style={{
    color: estado === 1 ? 'black': 'gray'
  }} onClick={onClick}>{nombre}</li>
);

ItemGrupo.propTypes = {
  id: PropTypes.number,
  estado: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ItemGrupo;