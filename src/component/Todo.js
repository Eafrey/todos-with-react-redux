import React from 'react';
import { PureComponent } from 'react';
import {
  clickToEdit,
  clickToDone,
  changeEditStatus,
  deleteTodo,
  deleteTodoInServer
} from '../actions/index';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

class ToDo extends PureComponent {
  render() {
    let input;
    const timeStrap = new Date(this.props.todo.date);
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

    const tasks = this.props.todo.tasks;

    return (
      <div>
        <div className="row">
          <div className="input-group">
            <span className="input-group-addon">
              <input
                type="checkbox"
                onClick={() => this.props.clickToDone(this.props.todo.id)}
              />
            </span>

            <span className="input-group-btn">
              <button
                className="btn btn-info"
                onClick={() => {
                  this.props.push(`/todo-detail/${this.props.todo.id}`);
                }}
              >
                detail
              </button>
            </span>

            <input
              type="text"
              className="form-control"
              ref={node => (input = node)}
              defaultValue={this.props.todo.content}
              readOnly={this.props.todo.readOnly}
              style={
                this.props.todo.complete === true
                  ? { textDecoration: 'line-through' }
                  : {}
              }
              onDoubleClick={() =>
                this.props.changeEditStatus(this.props.todo.id)
              }
              onBlur={() => {
                this.props.clickToEdit(this.props.todo.id, input.value);
                this.props.changeEditStatus(this.props.todo.id);
              }}
              // onClick={() => push(`/todo-detail/${todo.id}`)}
            />

            <span className="input-group-addon">
              <span>{'create time:' + createTime}</span>
            </span>

            <span className="input-group-btn">
              <button
                className="btn btn-danger"
                onClick={() =>
                  this.props.deleteTodoInServer(this.props.todo.id)
                }
              >
                X
              </button>
            </span>
          </div>

          {/* <ul className="list-group">
          {tasks.map(task => {
            return (
              <li key={task.id} className="list-group-item">
                {task.task}
              </li>
            );
          })}
        </ul> */}
        </div>

        <div className="row input-group">
          <input className="form-control" ref={node => (input = node)} />
          <span className="input-group-btn">
            <button className="btn btn-default">Add Task</button>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.filter(item => item.visible === true)
  };
};

const mapDispatchToProps = dispatch => ({
  clickToDone: id => dispatch(clickToDone(id)),
  clickToEdit: (id, text) => dispatch(clickToEdit(id, text)),
  changeEditStatus: id => dispatch(changeEditStatus(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  push: id => dispatch(push(id)),
  deleteTodoInServer: id => dispatch(deleteTodoInServer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
