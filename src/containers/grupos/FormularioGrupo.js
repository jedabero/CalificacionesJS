/**
 * Created by jedabero on 31/01/17.
 */
import React, {Component, PropTypes} from 'react';

import './FormularioGrupo.css';

class FormularioGrupo extends Component {
  constructor({nombre}) {
    super();
    this.state = {
      nombre
    };
  }

  componentWillReceiveProps ({nombre, orden}) {
    this.setState({nombre, orden});
  }

  handleClick = event => {
    const {nombre} = this.state;
    const {editing, onGuardar} = this.props;
    event.preventDefault();
    const trimmedNombre = nombre.trim();
    if (trimmedNombre.length > 0) {
      if (!editing) this.setState({nombre: ''});
      onGuardar(trimmedNombre);
    }
  };

  render() {
    const {nombre} = this.state;
    const {nombreLabel} = this.props;
    return (
      <form className="form">
        <div className="input-group">
          <label className="input-label" htmlFor="inputNombreGrupo">{nombreLabel}</label>{' '}
          <input
            className="form-input"
            type="text"
            id="inputNombreGrupo"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={event => this.setState({nombre: event.target.value})} />
        </div>
        <button className="form-button" onClick={this.handleClick}>
          Guardar
        </button>
      </form>
    );
  }
}

FormularioGrupo.propTypes = {
  nombre: PropTypes.string,
  nombreLabel: PropTypes.string,
  editing: PropTypes.bool,
  onGuardar: PropTypes.func.isRequired
};

FormularioGrupo.defaultProps = {
  nombre: '',
  nombreLabel: 'Nombre',
  editing: false
};

export default FormularioGrupo;