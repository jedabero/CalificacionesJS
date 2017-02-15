/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import Nota from '../shape';
import ItemNota from './ItemNota';
import './ListaNota.css'

const ListaNota = ({notas, onNotaClick}) => {
  if (notas.length === 0) return <span>No hay notas</span>;
  return (
    <ul className="lista-nota">
      {notas.map(n =>
        <ItemNota
          key={n.id}
          nota={n}
          onClick={() => onNotaClick(n)}
        />
      )}
    </ul>
  )
};

ListaNota.propTypes = {
  notas: PropTypes.arrayOf(Nota.isRequired).isRequired,
  onNotaClick: PropTypes.func
};

export default ListaNota;