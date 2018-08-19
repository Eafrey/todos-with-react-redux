import { combineReducers } from 'redux';
import todos from './todos';
import headers from './headers';
import tasks from './tasks';
import userState from './UserState';

export default combineReducers({
  todos,
  headers,
  tasks,
  userState
});
