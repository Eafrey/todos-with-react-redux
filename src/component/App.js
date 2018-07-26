import React from 'react';
import Header from './Header';
import VisibleToDoList from '../container/VisibleToDoList';
import AddToDo from '../container/AddToDo';
import FilterToDo from '../container/FilterToDo';

const App = () => (
  <div>
    <Header />
    <AddToDo />
    <FilterToDo />
    <VisibleToDoList />
  </div>
);

export default App;
