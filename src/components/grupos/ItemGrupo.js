/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

const style = {
  item: estado => {
    return {
      display: 'block',
      cursor: 'pointer',
      border: '1px solid #DDDDDD',
      padding: '8px 16px',
      marginBottom: '-1px',
      color: estado === 1 ? 'black': 'gray'
    }
  },
  badge: estado => {
    return {
      padding: '4px 8px',
      textAlign: 'center',
      verticalAlign: 'middle',
      borderRadius: '10px',
      color: 'white',
      backgroundColor: estado === 1 ? 'red': 'gray'
    }
  }
};

const ItemGrupo = ({id, estado, nombre, onClick}) => (
  <li
    style={style.item(estado)}
    onClick={onClick} >
    <span style={style.badge(estado)}>{id}</span> {nombre}
  </li>
);

ItemGrupo.propTypes = {
  id: PropTypes.number,
  estado: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ItemGrupo;