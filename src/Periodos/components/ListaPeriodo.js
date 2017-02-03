/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import Periodo from '../shape';
import ItemPeriodo from './ItemPeriodo';
import './ListaPeriodo.css'

const ListaPeriodo = ({periodos, onPeriodoClick}) => {
  if (periodos.length === 0) return <span>No hay periodos</span>;
  return (
    <ul className="lista-periodo">
      {periodos.map(p =>
        <ItemPeriodo
          key={p.id}
          periodo={p}
          onClick={() => onPeriodoClick(p)}
        />
      )}
    </ul>
  )
};

ListaPeriodo.propTypes = {
  periodos: PropTypes.arrayOf(Periodo.isRequired).isRequired,
  onPeriodoClick: PropTypes.func
};

export default ListaPeriodo;