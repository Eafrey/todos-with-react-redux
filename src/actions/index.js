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
  let loginRes;
  fetch('./api/login', {
    method: 'POST',
    body: '{"userName": "user-8","password":"123456"}',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(response => response.text())
    .then(token => {
      console.log('token', token);
      if (token == 'log in failed') {
        loginRes = token;
      } else {
        token = 'log in success';
      }
      localStorage.token = token;
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

export const addTodoToServer = todo => {
  console.log('start addTodoToServer');
  fetch('./api/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    })
  })
    .then(response => response.json())
    .then(json => {
      json;
      // localStorage.token = token;
    });
  return {
    type: 'ADD_TODO_TO_SERVER'
  };
};
