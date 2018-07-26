import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  todo,
  clickToDone,
  clickToEdit,
  changeEditStatus,
  deleteTodo
}) => {
  let input;

  return (
    <div>
      <input type="checkbox" onClick={() => clickToDone(todo.id)} />
      <input
        ref={node => (input = node)}
        type="text"
        defaultValue={todo.content}
        readOnly={todo.readOnly}
        style={todo.complete === true ? { textDecoration: 'line-through' } : {}}
        onDoubleClick={() => changeEditStatus(todo.id)}
        onBlur={() => {
          clickToEdit(todo.id, input.value);
          changeEditStatus(todo.id);
        }}
      />
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  clickToDone: PropTypes.func.isRequired,
  clickToEdit: PropTypes.func.isRequired,
  changeEditStatus: PropTypes.func.isRequired
};

export default Todo;
