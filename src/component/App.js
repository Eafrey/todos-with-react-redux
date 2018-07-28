import React from 'react';
import HeadersInfo from '../container/HeaderInfo';
import VisibleToDoList from '../container/VisibleToDoList';
import AddToDo from '../container/AddTodo';
import FilterToDo from '../container/FilterToDo';

const App = () => {
  return (
    <div>
      <HeadersInfo />
      <FilterToDo />
      <VisibleToDoList />
      <AddToDo />
    </div>
  );
};

export default App;
