import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { addTodoToServer, addTask, clearTask } from '../actions';
class AddTodo extends PureComponent {
  render() {
    let inputTodo;
    let inputTask;

    let tasks = this.props.tasks;

    return (
      <div>
        <div className="row">
          <input
            className="form-control"
            placeholder="todo content"
            ref={node => (inputTodo = node)}
          />
        </div>

        <div className="row input-group">
          <input
            className="form-control"
            placeholder="task content"
            ref={node => (inputTask = node)}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              onClick={() => {
                if (!inputTask.value.trim()) {
                  return;
                }
                this.props.addTask(inputTask.value);
                inputTask.value = '';
              }}
            >
              Add Task
            </button>
          </span>
        </div>

        <ul className="list-group">
          {tasks.map(task => {
            return (
              <li key={task.id} className="list-group-item">
                {task.task}
              </li>
            );
          })}
        </ul>

        <span className="input-group-btn">
          <button
            className="btn btn-default"
            onClick={() => {
              if (!inputTodo.value.trim()) {
                return;
              }
              console.log('taskssss', tasks);
              this.props.addTodoToServer(inputTodo.value, tasks);
              this.props.clearTask();
              inputTodo.value = '';
            }}
          >
            Add ToDo
          </button>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => ({
  addTodoToServer: (text, tasks) => dispatch(addTodoToServer(text, tasks)),
  addTask: text => dispatch(addTask(text)),
  clearTask: () => dispatch(clearTask())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
