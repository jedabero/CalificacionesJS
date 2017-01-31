import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import App from './App';
import Grupos from './containers/grupos/Grupos';
import './index.css';

const Login = () => (<div>Login</div>);
const Logout = () => (<div>Logout</div>);
const Registro = () => (<div>Registro</div>);
const Grupo = ({params, children}) => (<div><div>Grupo #{params.grupoId}</div><div>{children}</div></div>);
const Periodos = ({params, children}) => (<div><div>Periodos</div><div>{children}</div></div>);
const Periodo = ({params, children}) => (<div><div>Periodo #{params.periodoId}</div><div>{children}</div></div>);
const Asignaturas = ({params, children}) => (<div><div>Asignaturas</div><div>{children}</div></div>);
const Asignatura = ({params, children}) => (<div><div>Asignatura #{params.asignaturaId}</div><div>{children}</div></div>);

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="grupos" component={Grupos}>
          <Route path=":grupoId" component={Grupo}>
            <Route path="periodos" component={Periodos}>
              <Route path=":periodoId" component={Periodo}>
                <Route path="asignaturas" component={Asignaturas}>
                  <Route path=":asignaturaId" component={Asignatura}/>
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
