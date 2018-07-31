import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  todo,
  clickToDone,
  clickToEdit,
  changeEditStatus,
  deleteTodo,
  push
}) => {
  let input;
  const timeStrap = new Date(todo.id);
  const month = parseInt(timeStrap.getMonth(), 10) + 1;
  const createTime =
    timeStrap.getFullYear() +
    '-' +
    month +
    '-' +
    timeStrap.getDate() +
    ' ' +
    timeStrap.getHours() +
    ':' +
    timeStrap.getMinutes() +
    ':' +
    timeStrap.getSeconds();

  return (
    <div className="row">
      <div className="input-group">
        <span className="input-group-addon">
          <input type="checkbox" onClick={() => clickToDone(todo.id)} />
        </span>

        <span className="input-group-btn">
          <button
            className="btn btn-info"
            onClick={() => {
              push(`/todo-detail/${todo.id}`);
            }}
          >
            detail
          </button>
        </span>

        <input
          type="text"
          className="form-control"
          ref={node => (input = node)}
          defaultValue={todo.content}
          readOnly={todo.readOnly}
          style={
            todo.complete === true ? { textDecoration: 'line-through' } : {}
          }
          onDoubleClick={() => changeEditStatus(todo.id)}
          onBlur={() => {
            clickToEdit(todo.id, input.value);
            changeEditStatus(todo.id);
          }}
          // onClick={() => push(`/todo-detail/${todo.id}`)}
        />

        <span className="input-group-addon">
          <span>{'create time:' + createTime}</span>
        </span>

        <span className="input-group-btn">
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
        </span>
      </div>
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
