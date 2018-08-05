const userState = {
  logState: '',
  registerState: ''
};

const UserState = (state = userState, action) => {
  switch (action.type) {
    case 'CHANGE_REGISTER_STATE':
      return {
        ...userState,
        registerState: action.state
      };
    case 'REGISTER_TO_SERVER':
      console.log('action.res', action.res);
      return {
        ...userState,
        registerState: action.res
      };
    default:
      return state;
  }
};

export default UserState;
