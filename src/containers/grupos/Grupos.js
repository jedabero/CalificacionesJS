/**
 * Created by jedabero on 30/01/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {agregarGrupo} from '../../actions/grupos';
import ListaGrupo from '../../components/grupos/ListaGrupo';
import FormularioGrupo from './FormularioGrupo';

class Grupos extends Component {
  componentDidMount() {
    // TODO cargar grupos del store
  }

  render () {
    const {children, grupos, onGuardar, onGrupoClick} = this.props;
    let content;
    if (grupos.length === 0) {
      content = <span>No hay grupos</span>;
    } else {
      content = <ListaGrupo grupos={grupos} onGrupoClick={onGrupoClick}/>;
    }

    return (
      <div style={{textAlign: 'start'}}>
        <h3>Grupos</h3>
        <FormularioGrupo
          nombreLabel="Nuevo grupo"
          onGuardar={onGuardar}
        />
        <div>{children || content}</div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    grupos: state.grupos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGuardar: (nombre) => {
      dispatch(agregarGrupo(nombre));
    },
    onGrupoClick: id => {
      console.log(`Grupo #${id}`)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Grupos);