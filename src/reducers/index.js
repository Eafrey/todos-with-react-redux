import { combineReducers } from 'redux';
import todos from './todos';
import headers from './headers';

export default combineReducers({
  todos,
  headers
});
