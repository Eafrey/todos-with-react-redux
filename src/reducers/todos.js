const todolist = [
  { id: 1, content: 'todo1', complete: false },
  { id: 2, content: 'todo2', complete: false },
  { id: 3, content: 'todo3', complete: false }
];

const todos = (state = todolist, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('add', '');
      return [
        ...state,
        {
          id: action.id,
          content: action.text,
          completed: false
        }
      ];
    case 'CLICK_TO_EDIT':
      console.log('click_to_edit', action.text);
      return state.map(
        todo =>
          todo.text === action.text ? { ...todo, content: action.text } : todo
      );
    case 'CLICK_TO_DONE':
      console.log('click_to_done', '');
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'FILTER_TODO':
      console.log('filter_to_do', '');
      return state.filter(todo => todo.content == action.text);

    default:
      return state;
  }
};

export default todos;
