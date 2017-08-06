import reducer from '../trips-reducer';

describe('Test sample reducer', () => {
  it('should return the initial empty state', () => {
    const action = {};
    const state = undefined;
    const expectedState = [];

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should return the trips in action playload', () => {
    const trips = [
      {
        name: 'Liusha',
        email: 'liusha@wizeline.com',
        phone: '12345678',
        origin: {
          is_office: true,
          zipcode: '12345',
          colonia: 'americana'
        },
        destination: {
          is_office: false,
          zipcode: '12345',
          colonia: 'Americana'
        }
      }
    ];
    const action = {
      type: 'TRIPS_LOADED',
      payload: trips
    };
    const state = undefined;
    const expectedState = trips;

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
