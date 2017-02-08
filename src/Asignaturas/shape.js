/**
 * Created by jedabero on 02/02/17.
 */
import {PropTypes} from 'react';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  estado: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  codigo: PropTypes.string,
  peso: PropTypes.number.isRequired,
  periodo_id: PropTypes.number.isRequired
});