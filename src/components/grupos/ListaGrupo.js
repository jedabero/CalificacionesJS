/**
 * Created by jedabero on 30/01/17.
 */
import React, {PropTypes} from 'react';

import ItemGrupo from './ItemGrupo';

const ListaGrupo = ({grupos, onGrupoClick}) => (
  <ul>
    {grupos.map(g =>
      <ItemGrupo
        key={g.id}
        estado={g.estado}
        nombre={g.nombre}
        onClick={() => onGrupoClick(g.id)}
      />
    )}
  </ul>
);

ListaGrupo.propTypes = {
  grupos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    estado: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }).isRequired).isRequired,
  onGrupoClick: PropTypes.func
};

export default ListaGrupo;