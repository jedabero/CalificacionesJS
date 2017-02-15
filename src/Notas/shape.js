/**
 * Created by jedabero on 02/02/17.
 */
import {PropTypes} from 'react';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  estado: PropTypes.number.isRequired,
  valor: PropTypes.number.isRequired,
  peso: PropTypes.number.isRequired,
  orden: PropTypes.number.isRequired,
  asignatura_id: PropTypes.number.isRequired
});