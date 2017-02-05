/**
 * Created by jedabero on 31/01/17.
 */
import React, {Component, PropTypes} from 'react';

import './FormularioAsignatura.css';

class FormularioAsignatura extends Component {
  constructor({nombre, peso}) {
    super();
    this.state = {
      nombre, peso
    };
  }

  componentWillReceiveProps ({nombre, peso}) {
    this.setState({nombre, peso});
  }

  handleClick = event => {
    const {nombre, peso} = this.state;
    const {editing, onGuardar} = this.props;
    event.preventDefault();
    const trimmedNombre = nombre.trim();
    if (trimmedNombre.length > 0) {
      if (!editing) this.setState({nombre: ''});
      onGuardar(trimmedNombre, peso);
    }
  };

  render() {
    const {nombre, peso} = this.state;
    const {nombreLabel, pesoLabel} = this.props;
    return (
      <form className="form">
        <div className="input-group">
          <label className="input-label" htmlFor="inputNombreAsignatura">{nombreLabel}</label>{' '}
          <input
            className="form-input"
            type="text"
            id="inputNombreAsignatura"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={event => this.setState({nombre: event.target.value})} />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="inputPesoAsignatura">{pesoLabel}</label>{' '}
          <input
            className="form-input"
            type="number"
            id="inputPesoAsignatura"
            name="peso"
            value={peso}
            onChange={event => this.setState({peso: parseInt(event.target.value, 10)})} />
        </div>
        <button className="form-button" onClick={this.handleClick}>
          Guardar
        </button>
      </form>
    );
  }
}

FormularioAsignatura.propTypes = {
  nombre: PropTypes.string,
  nombreLabel: PropTypes.string,
  peso: PropTypes.number,
  pesoLabel: PropTypes.string,
  editing: PropTypes.bool,
  onGuardar: PropTypes.func.isRequired
};

FormularioAsignatura.defaultProps = {
  nombre: '',
  nombreLabel: 'Nombre',
  peso: 1,
  pesoLabel: 'Peso',
  editing: false
};

export default FormularioAsignatura;