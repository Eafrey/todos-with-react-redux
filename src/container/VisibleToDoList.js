import { connect } from 'react-redux';
import ToDoList from '../component/ToDoList';
import { clickToEdit, clickToDone } from '../actions/index';

const todos = state => ({
  todos: state.todos
});

const edit = dispatch => ({
  clickToEdit: id => dispatch(clickToEdit(id))
});

const done = dispatch => ({
  clickToDone: id => dispatch(clickToDone(id))
});

export default connect(
  todos,
  done
)(ToDoList);
