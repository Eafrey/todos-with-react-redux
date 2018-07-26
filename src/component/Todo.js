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
  const createTime = new Date(todo.id);
  const month = parseInt(createTime.getMonth()) + 1;
  const formatTime =
    createTime.getFullYear() +
    '-' +
    month +
    '-' +
    createTime.getDate() +
    ' ' +
    createTime.getHours() +
    ':' +
    createTime.getMinutes() +
    ':' +
    createTime.getSeconds();

  return (
    <div className="row">
      {/* <div className="col-lg-8"> */}
      <div className="input-group">
        <span className="input-group-addon">
          <input type="checkbox" onClick={() => clickToDone(todo.id)} />
        </span>
        <input
          type="text"
          className="form-control"
          ref={node => (input = node)}
          defaultValue={todo.content + ', create time:' + formatTime}
          readOnly={todo.readOnly}
          style={
            todo.complete === true ? { textDecoration: 'line-through' } : {}
          }
          onDoubleClick={() => changeEditStatus(todo.id)}
          onBlur={() => {
            clickToEdit(todo.id, input.value);
            changeEditStatus(todo.id);
          }}
        />

        <span className="input-group-btn">
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
        </span>
        {/* </div> */}
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
