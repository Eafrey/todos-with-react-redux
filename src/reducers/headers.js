const userInfos = {
  avator: 'avator',
  name: ''
};

const headers = (state = userInfos, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...userInfos,
        name: action.name
      };
    default:
      return state;
  }
};

export default headers;
