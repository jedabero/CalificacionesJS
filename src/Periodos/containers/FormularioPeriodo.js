/**
 * Created by jedabero on 31/01/17.
 */
import React, {Component, PropTypes} from 'react';

import './FormularioPeriodo.css';

class FormularioPeriodo extends Component {
  constructor({nombre, orden}) {
    super();
    this.state = {
      nombre, orden
    };
  }

  componentWillReceiveProps ({nombre, orden}) {
    this.setState({nombre, orden});
  }

  handleClick = event => {
    const {nombre, orden} = this.state;
    const {editing, onGuardar} = this.props;
    event.preventDefault();
    const trimmedNombre = nombre.trim();
    if (trimmedNombre.length > 0) {
      if (!editing) this.setState({nombre: ''});
      onGuardar(trimmedNombre, orden);
    }
  };

  render() {
    const {nombre, orden} = this.state;
    const {nombreLabel, ordenLabel} = this.props;
    return (
      <form className="form">
        <div className="input-group">
          <label className="input-label" htmlFor="inputNombrePeriodo">{nombreLabel}</label>{' '}
          <input
            className="form-input"
            type="text"
            id="inputNombrePeriodo"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={event => this.setState({nombre: event.target.value})} />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="inputNombreGrupo">{ordenLabel}</label>{' '}
          <input
            className="form-input"
            type="number"
            id="inputOrdenPeriodo"
            name="orden"
            value={orden}
            onChange={event => this.setState({orden: parseInt(event.target.value, 10)})} />
        </div>
        <button className="form-button" onClick={this.handleClick}>
          Guardar
        </button>
      </form>
    );
  }
}

FormularioPeriodo.propTypes = {
  nombre: PropTypes.string,
  nombreLabel: PropTypes.string,
  orden: PropTypes.number,
  ordenLabel: PropTypes.string,
  editing: PropTypes.bool,
  onGuardar: PropTypes.func.isRequired
};

FormularioPeriodo.defaultProps = {
  nombre: '',
  nombreLabel: 'Nombre',
  orden: 0,
  ordenLabel: 'Orden',
  editing: false
};

export default FormularioPeriodo;