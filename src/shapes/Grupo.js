/**
 * Created by jedabero on 31/01/17.
 */
import {PropTypes} from 'react';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  estado: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired
});