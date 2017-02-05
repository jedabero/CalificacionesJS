/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import Asignatura from '../shape';
import ItemAsignatura from './ItemAsignatura';
import './ListaAsignatura.css'

const ListaAsignatura = ({asignaturas, onAsignaturaClick}) => {
  if (asignaturas.length === 0) return <span>No hay asignaturas</span>;
  return (
    <ul className="lista-asignatura">
      {asignaturas.map(a =>
        <ItemAsignatura
          key={a.id}
          asignatura={a}
          onClick={() => onAsignaturaClick(a)}
        />
      )}
    </ul>
  )
};

ListaAsignatura.propTypes = {
  asignaturas: PropTypes.arrayOf(Asignatura.isRequired).isRequired,
  onAsignaturaClick: PropTypes.func
};

export default ListaAsignatura;