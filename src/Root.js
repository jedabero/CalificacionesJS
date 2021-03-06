import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import App from './containers/App';
import {Grupos, Grupo} from './Grupos';
import {Periodos, Periodo} from './Periodos';
import {Asignaturas, Asignatura} from './Asignaturas';
import {Notas, Nota} from './Notas';
import './index.css';

const Login = () => (<div>Login</div>);
const Logout = () => (<div>Logout</div>);
const Registro = () => (<div>Registro</div>);

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="grupos" component={Grupos}>
          <Route path=":grupoId" component={Grupo}>
            <Route path="periodos" component={Periodos}>
              <Route path=":periodoId" component={Periodo}>
                <Route path="asignaturas" component={Asignaturas}>
                  <Route path=":asignaturaId" component={Asignatura}>
                    <Route path="notas" component={Notas}>
                      <Route path=":notaId" component={Nota}/>
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="login" component={Login}/>
      <Route path="logout" component={Logout}/>
      <Route path="register" component={Registro}/>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
