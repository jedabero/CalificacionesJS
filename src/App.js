// @flow
import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

import './App.css';

class App extends Component {
  render() {
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
            <ul>
              <li>Grupos <span>{0}</span></li>
              <li>Periodos <span>{0}</span></li>
              <li>Asignaturas <span>{0}</span></li>
            </ul>
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
