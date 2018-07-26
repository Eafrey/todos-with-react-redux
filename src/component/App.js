import React from 'react';
import HeadersInfo from '../container/HeaderInfo';
import VisibleToDoList from '../container/VisibleToDoList';
import AddToDo from '../container/AddTodo';
import FilterToDo from '../container/FilterToDo';

// const App = () => (
//   <div>
//     <NavLink
//     to={'/detail'}
//     activeStyle={ {
//       textDecoration: 'none',
//       color: 'black'
//     }}
//     >
//     detail
//     </NavLink>
//     <HeadersInfo />
//     <FilterToDo />
//     <VisibleToDoList />
//     <AddToDo />
//   </div>
// );

const App = ({ match: { params } }) => {
  console.log('params.id', params.id);
  const isMain = params.id || 'mainPage';
  console.log('isMain', isMain);
  if (isMain === 'mainPage') {
    return (
      <div>
        <HeadersInfo />
        <FilterToDo />
        <VisibleToDoList />
        <AddToDo />
      </div>
    );
  } else {
    return <div>{params.id.split(',').map(item => <div>{item}</div>)}</div>;
  }
};

export default App;
