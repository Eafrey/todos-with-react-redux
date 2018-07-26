export const addToDo = text => ({
  type: 'ADD_TODO',
  text
});

export const clickToEdit = text => ({
  type: 'CLICK_TO_EDIT',
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
