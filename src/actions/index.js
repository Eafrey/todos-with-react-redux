export const addTodo = text => ({
  type: 'ADD_TODO',
  text
});

export const clickToEdit = id => ({
  type: 'CLICK_TO_EDIT',
  id
});

export const clickToDone = id => ({
  type: 'CLICK_TO_DONE',
  id
});
