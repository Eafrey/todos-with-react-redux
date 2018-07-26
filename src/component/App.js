import React from 'react';
import HeadersInfo from '../container/HeaderInfo';
import VisibleToDoList from '../container/VisibleToDoList';
import AddToDo from '../container/AddToDo';
import FilterToDo from '../container/FilterToDo';

const App = () => (
  <div>
    <HeadersInfo />
    <FilterToDo />
    <VisibleToDoList />
    <AddToDo />
  </div>
);

export default App;
