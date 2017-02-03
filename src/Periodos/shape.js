/**
 * Created by jedabero on 02/02/17.
 */
import {PropTypes} from 'react';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  estado: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  orden: PropTypes.number.isRequired,
  grupo_id: PropTypes.number.isRequired
});