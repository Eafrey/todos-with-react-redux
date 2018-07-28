const todolist = [
  {
    id: 1000000,
    content: 'todo1',
    complete: false,
    readOnly: true,
    visible: true
  },
  {
    id: 2000000,
    content: 'todo2',
    complete: false,
    readOnly: true,
    visible: true
  },
  {
    id: 3000000,
    content: 'todo3',
    complete: false,
    readOnly: true,
    visible: true
  }
];

const todos = (state = todolist, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          content: action.text,
          complete: false,
          readOnly: true,
          visible: true
        }
      ];
    case 'CLICK_TO_EDIT':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, content: action.text } : todo
      );
    case 'CLICK_TO_DONE':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    case 'CHANGE_EDIT_STATUS':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, readOnly: !todo.readOnly } : todo
      );
    case 'FILTER_TODO':
      return state.map(
        todo =>
          todo.content.includes(action.text)
            ? { ...todo, visible: true }
            : { ...todo, visible: false }
      );
    case 'DELETE_TODO':
      return state.filter(item => action.id !== item.id);
    default:
      return state;
  }
};

export default todos;
