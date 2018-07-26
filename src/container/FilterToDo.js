import React from 'react';
import { connect } from 'react-redux';
import { filterToDo } from '../actions';

const FilterTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          console.log('filterToDo(input.value)', input.value);
          dispatch(filterToDo(input.value));
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">filter ToDo</button>
      </form>
    </div>
  );
};

export default connect()(FilterTodo);
