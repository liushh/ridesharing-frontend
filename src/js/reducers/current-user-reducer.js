const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CURRENT_USER':
      return action.currentUser;
    default:
      return state;
  }
};

export default currentUserReducer;
