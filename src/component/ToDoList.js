import React from 'react';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class ToDoList extends PureComponent {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              changeEditStatus={this.props.changeEditStatus}
              clickToEdit={this.props.clickToEdit}
              clickToDone={this.props.clickToDone}
              deleteTodo={this.props.deleteTodo}
              push={this.props.push}
              deleteTodoInServer={this.props.deleteTodoInServer}
            />
          );
        })}
      </div>
    );
  }
}

// const ToDoList = ({ todos,  clickToDone }) => (
//   <ul>
//     {todos.map(todo =>
//       <Todo
//         key={todo.id}
//         todo = {todo}
//         // onChange={edit}
//         onClick={() => clickToDone(todo.id)}
//       />
//     )}
//   </ul>
// )

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  clickToDone: PropTypes.func.isRequired
};

export default ToDoList;
