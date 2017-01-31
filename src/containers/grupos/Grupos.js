/**
 * Created by jedabero on 30/01/17.
 */
import {connect} from 'react-redux';

import ListaGrupo from '../../components/grupos/ListaGrupo';

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

const Grupos = connect(mapStateToProps, mapDispatchToProps)(ListaGrupo);

export default Grupos;