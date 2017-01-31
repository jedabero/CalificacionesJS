/**
 * Created by jedabero on 31/01/17.
 */
import React, {Component, PropTypes} from 'react';

class FormularioGrupo extends Component {
  constructor({nombre}) {
    super();
    this.state = {
      nombre
    };
  }

  render() {
    const {nombre} = this.state;
    const {nombreLabel, onGuardar} = this.props;
    return (
      <form>
        <div>
          <label htmlFor="inputNombreGrupo">{nombreLabel}</label>
          <input
            type="text"
            id="inputNombreGrupo"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={event => this.setState({nombre: event.target.value})}
          />
        </div>
        <button
          onClick={event => {
            event.preventDefault();
            const trimmedNombre = nombre.trim();
            if (trimmedNombre.length > 0) {
              this.setState({nombre: ''});
              onGuardar(trimmedNombre);
            }
          }}
        >
          Guardar
        </button>
      </form>
    );
  }
}

FormularioGrupo.propTypes = {
  nombre: PropTypes.string,
  nombreLabel: PropTypes.string,
  onGuardar: PropTypes.func.isRequired
};

FormularioGrupo.defaultProps = {
  nombre: '',
  nombreLabel: 'Nombre'
};

export default FormularioGrupo;