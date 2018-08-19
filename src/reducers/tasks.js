const initTasks = [];

const tasks = (state = initTasks, action) => {
  switch (action.type) {
    case 'ADD_TASKS':
      return [
        ...state,
        {
          task: action.text
        }
      ];
    case 'CLEAR_TASKS':
      return [];
    default:
      return state;
  }
};

export default tasks;
