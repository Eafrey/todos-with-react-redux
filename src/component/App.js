import React from 'react';
import HeaderInfoContainer from '../container/HeaderInfoContainer';
import ToDoListContainer from '../container/ToDoListContainer';
import AddToDo from '../container/AddTodo';
import FilterToDo from '../container/FilterToDo';

const App = () => {
  return (
    <div>
      <HeaderInfoContainer />
      <FilterToDo />
      <ToDoListContainer />
      <AddToDo />
    </div>
  );
};

export default App;
