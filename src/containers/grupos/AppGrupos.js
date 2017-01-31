/**
 * Created by jedabero on 30/01/17.
 */
import React from 'react';

import Grupos from './Grupos';
// TODO simple
const AppGrupos = ({children}) => (
  <div>
    <div>Grupos</div>
    <div>{children || <Grupos/>}</div>
  </div>
);

export default AppGrupos;