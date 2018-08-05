import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { addTodoToServer } from '../actions';
class AddTodo extends PureComponent {
  render() {
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
              this.props.addTodoToServer(input.value);
              input.value = '';
            }}
          >
            Add ToDo
          </button>
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodoToServer: text => dispatch(addTodoToServer(text))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
