/**
 * Created by jedabero on 31/01/17.
 */
import React, {Component, PropTypes} from 'react';

import './FormularioNota.css';

class FormularioNota extends Component {
  constructor({valor, peso, orden}) {
    super();
    this.state = {
      valor, peso, orden
    };
  }

  componentWillReceiveProps ({valor, peso, orden}) {
    this.setState({valor, peso, orden});
  }

  handleClick = event => {
    const {valor, peso, orden} = this.state;
    const {editing, onGuardar} = this.props;
    event.preventDefault();
    if (peso > 0) {
      if (!editing) this.setState({valor: ''});
      onGuardar(valor, peso, orden);
    }
  };

  render() {
    const {valor, peso, orden} = this.state;
    const {valorLabel, pesoLabel, ordenLabel} = this.props;
    return (
      <form className="form">
        <div className="input-group">
          <label className="input-label" htmlFor="inputValorNota">{valorLabel}</label>{' '}
          <input
            className="form-input"
            type="number"
            id="inputValorNota"
            name="valor"
            placeholder="Valor"
            value={valor}
            onChange={event => this.setState({valor: parseFloat(event.target.value)})} />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="inputPesoNota">{pesoLabel}</label>{' '}
          <input
            className="form-input"
            type="number"
            id="inputPesoNota"
            name="peso"
            value={peso}
            onChange={event => this.setState({peso: parseFloat(event.target.value)})} />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="inputOrdenNota">{ordenLabel}</label>{' '}
          <input
            className="form-input"
            type="number"
            id="inputOrdenNota"
            name="orden"
            placeholder="Orden"
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

FormularioNota.propTypes = {
  valor: PropTypes.number,
  valorLabel: PropTypes.string,
  peso: PropTypes.number,
  pesoLabel: PropTypes.string,
  orden: PropTypes.number,
  ordenLabel: PropTypes.string,
  editing: PropTypes.bool,
  onGuardar: PropTypes.func.isRequired
};

FormularioNota.defaultProps = {
  valor: 0,
  valorLabel: 'Valor',
  peso: 1,
  pesoLabel: 'Peso',
  orden: 1,
  ordenLabel: 'Orden',
  editing: false
};

export default FormularioNota;