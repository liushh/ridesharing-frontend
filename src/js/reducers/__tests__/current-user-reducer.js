import reducer from '../current-user-reducer';


describe('Test Current User Reducer', () => {
  it('should return default state', () => {
    const defaultState = {};

    const action = {
      type: 'DEFAULT_ACTION',
      currentUser: {
        name: 'liusha',
        email: 'liusha@wizeline.com'
      }
    };

    expect(reducer({}, action)).toEqual(defaultState);
  });

  it('should return current user', () => {
    const currentUser = {
      name: 'liusha',
      email: 'liusha@wizeline.com'
    };
    const action = {
      type: 'GET_CURRENT_USER',
      currentUser
    };

    expect(reducer({}, action)).toEqual(currentUser);
  });
});
