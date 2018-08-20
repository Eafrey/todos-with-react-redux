import React, { PureComponent } from 'react';
import HeaderInfo from '../component/Header';
import ToDoList from '../component/ToDoList';
import AddToDo from '../component/AddTodo';
import FilterToDo from '../component/FilterToDo';
import { getToDosFromServer } from '../actions';
import { connect } from 'react-redux';

export class App extends PureComponent {
  componentDidMount() {
    console.log('get_todo_token', localStorage.getItem('token'));
    fetch('http://localhost/api/todos', {
      method: 'GET',
      headers: new Headers({
        Authorization: localStorage.getItem('token')
      })
    })
      .then(response => response.json())
      .then(json => this.props.getToDosFromServer(json));
  }

  render() {
    return (
      <div>
        <HeaderInfo />
        {/* <GetServerList /> */}
        <FilterToDo />
        <div>
          <p>TODOS</p>
        </div>
        <ToDoList />
        <AddToDo />
      </div>
    );
  }
}

export default connect(
  null,
  { getToDosFromServer }
)(App);
