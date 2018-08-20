import React from 'react';
import { PureComponent } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

class ToDoList extends PureComponent {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return <Todo key={todo.date} todo={todo} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.filter(item => item.visible === true)
  };
};

export default connect(mapStateToProps)(ToDoList);
