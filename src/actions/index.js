import { push } from 'connected-react-router';

export const loginToServer = (userName, password) => dispatch => {
  console.log('start loginToServer');
  console.log(
    'log in body',
    JSON.stringify({
      userName: userName,
      password: password
    })
  );
  dispatch(changeLoginState('log in...'));
  fetch('./api/login', {
    method: 'POST',
    body: JSON.stringify({
      userName: userName,
      password: password
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(response => response.text())
    .then(token => {
      console.log('token_from_server', token);
      if (token === 'log in fail') {
        console.log('log in fail');
        dispatch(changeLoginState('log in fail'));
      } else {
        localStorage.token = token;
        console.log('log in success,token', token);
        dispatch(changeLoginState(''));
        dispatch(push('/todos'));
      }
    });
};

export const registerToServer = (userName, password) => dispatch => {
  console.log('start registerToServer');
  dispatch(changeRegisterState('register...'));
  fetch('./api/users', {
    method: 'POST',
    body: JSON.stringify({
      userName: userName,
      password: password
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(response => response.text())
    .then(text => {
      console.log('text', text);
      dispatch(changeRegisterState(text));
    });
};

export const addToDo = text => ({
  type: 'ADD_TODO',
  text
});

export const clickToEdit = (id, text) => ({
  type: 'CLICK_TO_EDIT',
  id,
  text
});

export const clickToDone = id => ({
  type: 'CLICK_TO_DONE',
  id
});

export const filterToDo = text => ({
  type: 'FILTER_TODO',
  text
});

export const changeEditStatus = id => ({
  type: 'CHANGE_EDIT_STATUS',
  id
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
});

export const setUserName = name => ({
  type: 'SET_USER_NAME',
  name
});

export const getToDosFromServer = list => ({
  type: 'GET_TODOS_FROM_SERVER',
  list
});

export const changeRegisterState = state => ({
  type: 'CHANGE_REGISTER_STATE',
  state
});

export const changeLoginState = state => ({
  type: 'CHANGE_LOGIN_STATE',
  state
});

export const addTask = text => ({
  type: 'ADD_TASKS',
  text
});

export const clearTask = () => ({
  type: 'CLEAR_TASKS'
});

export const addTodoToServer = (text, tasks) => {
  console.log('start addTodoToServer');
  console.log('add todo token', localStorage.getItem('token'));
  let todo = {};
  todo.content = text;
  todo.complete = false;
  todo.readOnly = true;
  todo.visible = true;
  todo.date = Date.now();
  todo.tasks = tasks;
  console.log('add todo todo', todo);

  fetch('./api/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    })
  })
    .then(response => response.status)
    .then(status => {
      console.log('add todo status', status);
      // status;
    });
  return {
    type: 'ADD_TODO_TO_SERVER',
    todo
  };
};

export const deleteTodoInServer = id => {
  console.log('start deleteTodoInServer');
  console.log('delete todo token', localStorage.getItem('token'));

  fetch(`./api/todos/${id}`, {
    method: 'DELETE',
    headers: new Headers({
      Authorization: localStorage.getItem('token')
    })
  })
    .then(response => response.status)
    .then(status => {
      console.log('delete todo status', status);
      // status;
    });
  return {
    type: 'DELETE_TODO_IN_SERVER',
    id
  };
};
