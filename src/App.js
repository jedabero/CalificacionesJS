// @flow
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

import VistaEstadisticas from './components/VistaEstadisticas';
import './App.css';

class App extends Component {

  render() {
    const e = {
      grupos: 0,
      periodos: 0,
      asignaturas: 0
    };
    return (
      <div className="App">
        <div className="App-header">
          <ul>
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/grupos">Grupos</Link></li>
            <li><Link to="/logout">Salir</Link></li>
          </ul>
        </div>
        <div className="App-intro">
          <div>
            <VistaEstadisticas estadisticas={e}/>
            <div>
              {this.props.children || <Link to="/grupos">Ver Grupos</Link>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
