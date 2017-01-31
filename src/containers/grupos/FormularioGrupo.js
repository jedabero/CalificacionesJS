/**
 * Created by jedabero on 31/01/17.
 */
import React, {Component, PropTypes} from 'react';

const style = {
  group: {
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  label: {
    display: 'inline-block',
    marginBottom: '8px',
    fontWeight: '700',
    fontSize: '14px'
  },
  input: {
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: '8px 16px',
    height: '21px',
    fontSize: '14px',
    lineHeight: '1.4',
    border: '1px solid #CCCCCC'
  },
  button: {
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: '8px 16px',
    margin: '0',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
    fontSize: '14px',
    lineHeight: '1.4',
    textTransform: 'none',
    cursor: 'pointer',
    userSelect: 'none'
  }
};

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
        <div style={style.group}>
          <label style={style.label} htmlFor="inputNombreGrupo">{nombreLabel}</label>{' '}
          <input
            type="text"
            id="inputNombreGrupo"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={event => this.setState({nombre: event.target.value})}
            style={style.input} />
        </div>
        <button
          style={style.button}
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