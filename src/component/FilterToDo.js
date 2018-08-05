import React from 'react';
import { connect } from 'react-redux';
import { filterToDo } from '../actions';

const FilterTodo = ({ filterToDo }) => {
  let input;

  return (
    <div className="row input-group">
      <input className="form-control" ref={node => (input = node)} />
      <span className="input-group-btn">
        <button
          className="btn btn-default"
          onClick={() => {
            filterToDo(input.value);
            input.value = '';
          }}
        >
          Filter ToDo
        </button>
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  filterToDo: text => dispatch(filterToDo(text))
});

export default connect(
  null,
  mapDispatchToProps
)(FilterTodo);
