/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import Grupo from '../shape';
import ItemGrupo from './ItemGrupo';
import './ListaGrupo.css'

const ListaGrupo = ({grupos, onGrupoClick}) => {
  if (grupos.length === 0) return <span>No hay grupos</span>;
  return (
    <ul className="lista-grupo">
      {grupos.map(g =>
        <ItemGrupo
          key={g.id}
          grupo={g}
          onClick={() => onGrupoClick(g)}
        />
      )}
    </ul>
  )
};

ListaGrupo.propTypes = {
  grupos: PropTypes.arrayOf(Grupo.isRequired).isRequired,
  onGrupoClick: PropTypes.func
};

export default ListaGrupo;