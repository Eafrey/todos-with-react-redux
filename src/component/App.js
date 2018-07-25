import React from 'react';
import Header from './Header';
import VisibleToDoList from '../container/VisibleToDoList';
import AddTodo from '../container/AddTodo';

const App = () => (
  <div>
    <Header />
    <AddTodo />
    <VisibleToDoList />
  </div>
);

export default App;
