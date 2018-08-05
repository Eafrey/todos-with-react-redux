const userState = {
  logState: '',
  registerState: ''
};

const UserState = (state = userState, action) => {
  switch (action.type) {
    case 'CHANGE_LOGIN_STATE':
      return {
        ...userState,
        logState: action.state
      };
    case 'CHANGE_REGISTER_STATE':
      return {
        ...userState,
        registerState: action.state
      };
    default:
      return state;
  }
};

export default UserState;
