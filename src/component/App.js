import React, { PureComponent } from 'react';
import HeaderInfoContainer from '../container/HeaderInfoContainer';
import ToDoListContainer from '../container/ToDoListContainer';
import AddToDo from '../container/AddTodo';
import FilterToDo from '../container/FilterToDo';
import { getToDosFromServer } from '../actions';
import { connect } from 'react-redux';

// const App = () => {
//   return (
//     <div>
//       <HeaderInfoContainer />
//       <GetServerList />
//       <FilterToDo />
//       <ToDoListContainer />
//       <AddToDo />
//     </div>
//   );
// };
// export default App;

export class App extends PureComponent {
  componentDidMount() {
    fetch('http://localhost/api/todos')
      .then(response => response.json())
      .then(json => this.props.getToDosFromServer(json));
  }

  render() {
    return (
      <div>
        <HeaderInfoContainer />
        {/* <GetServerList /> */}
        <FilterToDo />
        <ToDoListContainer />
        <AddToDo />
      </div>
    );
  }
}

export default connect(
  null,
  { getToDosFromServer }
)(App);
