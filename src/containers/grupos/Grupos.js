/**
 * Created by jedabero on 30/01/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import ListaGrupo from '../../components/grupos/ListaGrupo';

class Grupos extends Component {
  render () {
    const {children, grupos, onGrupoClick} = this.props;
    let content;
    if (grupos.length === 0) {
      content = <span>No hay grupos</span>;
    } else {
      content = <ListaGrupo grupos={grupos} onGrupoClick={onGrupoClick}/>;
    }

    return (
      <div>
        <h3>Grupos</h3>
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
    onGrupoClick: id => {
      console.log(`Grupo #${id}`)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Grupos);