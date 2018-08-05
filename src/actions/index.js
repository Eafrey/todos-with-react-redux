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

export const loginToServer = (userName, password) => {
  console.log('start loginToServer');
  console.log(
    'log in body',
    JSON.stringify({
      userName: userName,
      password: password
    })
  );
  let loginRes;
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
      console.log('token', token);
      localStorage.token = token;
      if (token === 'log in failed') {
        loginRes = token;
      } else {
        loginRes = 'log in success';
      }
    });
  return {
    type: 'LOG_IN_TO_SERVER',
    res: loginRes
  };
};

export const registerToServer = (userName, password) => {
  console.log('start registerToServer');
  let registerRes;
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
      registerRes = text;
    });
  return {
    type: 'REGISTER_TO_SERVER',
    res: registerRes
  };
};

export const addTodoToServer = text => {
  console.log('start addTodoToServer');
  console.log('add todo token', localStorage.getItem('token'));
  let todo = {};
  todo.content = text;
  todo.complete = false;
  todo.readOnly = true;
  todo.visible = true;
  todo.date = Date.now();
  todo.tasks = [];
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
