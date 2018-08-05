import React from 'react';
import { connect } from 'react-redux';
import { addTodoToServer } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="row input-group">
      <input className="form-control" ref={node => (input = node)} />
      <span className="input-group-btn">
        <button
          className="btn btn-default"
          onClick={() => {
            if (!input.value.trim()) {
              return;
            }
            dispatch(addTodoToServer(input.value));
            input.value = '';
          }}
        >
          Add ToDo
        </button>
      </span>
    </div>
  );
};

export default connect()(AddTodo);
