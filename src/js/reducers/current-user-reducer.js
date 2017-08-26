const defaultUser = {
  name: 'Liusha Huang',
  email: 'liusha@wizeline.com',
  phone: '12345678'
};

const currentUserReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case 'GET_CURRENT_USER':
      return action.currentUser;
    default:
      return state;
  }
};

export default currentUserReducer;
