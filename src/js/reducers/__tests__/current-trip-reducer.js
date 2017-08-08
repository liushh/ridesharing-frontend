import reducer from '../current-trip-reducer';
import { CREATE_TRIP } from '../../actions/create-trip';


describe('Test create-trip-reducer', () => {
  it('should return empty state', () => {
    const expectedState = null;

    const action = {
      type: null,
      payload: true
    };

    expect(reducer([], action)).toEqual(expectedState);
  });

  it('should return an empty dictionary for driver trip', () => {
    const expectedState = {
      isDriver: true,
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
      type: CREATE_TRIP,
      isDriver: true
    };

    expect(reducer([], action)).toEqual(expectedState);
  });

  it('should return an empty dictionary for rider trip', () => {
    const expectedState = {
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
      type: CREATE_TRIP,
      isDriver: false
    };

    expect(reducer([], action)).toEqual(expectedState);
  });
});
