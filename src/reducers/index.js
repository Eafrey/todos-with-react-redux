import { combineReducers } from 'redux';
import todos from './todos';
import headers from './headers';
import userState from './UserState';

export default combineReducers({
  todos,
  headers,
  userState
});
