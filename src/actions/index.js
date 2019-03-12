import cities from '../../data/cities';
import city_list from '../containers/city_list';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function activeCity() {
  return {
    type: 'ACTIVE_CITY',
    payload: city_list
  };
}
