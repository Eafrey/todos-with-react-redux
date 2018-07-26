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
