import reducer from '../trips-reducer';
import { SAVE_CURRENT_TRIP } from '../../actions/save-current-trip';

describe('Test sample reducer', () => {
  // it('should return the initial empty state', () => {
  //   const action = {};
  //   const state = undefined;
  //   const expectedState = [];

  //   expect(reducer(state, action)).toEqual(expectedState);
  // });

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

  it('should return new trips with new added current trips', () => {
    const currentTrip = {
      isDriver: false,
      name: '',
      email: '',
      phone: '',
      origin: {
        is_office: true,
        zipcode: '',
        colonia: ''
      },
      destination: {
        is_office: false,
        zipcode: '',
        colonia: ''
      }
    };
    const action = {
      type: SAVE_CURRENT_TRIP,
      currentTrip
    };
    const expectedState = [currentTrip];

    expect(reducer([], action)).toEqual(expectedState);
  });
});
