import { connect } from 'react-redux';
import ToDoList from '../component/ToDoList';
import {
  clickToEdit,
  clickToDone,
  changeEditStatus,
  deleteTodo
} from '../actions/index';

const todos = state => {
  return {
    todos: state.todos.filter(item => item.visible === true)
  };
};

// const edit = dispatch => ({
//   clickToEdit: id => dispatch(clickToEdit(id))
// });

const mapPropsToDispathch = dispatch => ({
  clickToDone: id => dispatch(clickToDone(id)),
  clickToEdit: (id, text) => dispatch(clickToEdit(id, text)),
  changeEditStatus: id => dispatch(changeEditStatus(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  todos,
  mapPropsToDispathch
)(ToDoList);
