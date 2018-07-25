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
      return [
        // ...state,
        // {
        //   id: action.id,
        //   content: action.text,
        //   completed: false
        // }
      ];
    case 'CLICK_TO_DONE':
      console.log('click', '');
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
