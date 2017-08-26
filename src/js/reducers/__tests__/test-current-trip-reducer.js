import reducer from '../current-trip-reducer';
import { CREATE_TRIP } from '../../actions/create-trip';
import { CANCEL_CURRENT_TRIP } from '../../actions/cancel-current-trip';
import { SAVE_CURRENT_TRIP } from '../../actions/save-current-trip';


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
      driveOrRide: 'Drive',
      origin: {
        isOffice: true,
        zipcode: '',
        colonia: ''
      },
      destination: {
        isOffice: false,
        zipcode: '',
        colonia: ''
      }
    };

    const action = {
      type: CREATE_TRIP,
      driveOrRide: 'Drive'
    };

    expect(reducer([], action)).toEqual(expectedState);
  });

  it('should return an empty dictionary for rider trip', () => {
    const expectedState = {
      driveOrRide: 'Ride',
      origin: {
        isOffice: true,
        zipcode: '',
        colonia: ''
      },
      destination: {
        isOffice: false,
        zipcode: '',
        colonia: ''
      }
    };

    const action = {
      type: CREATE_TRIP,
      driveOrRide: 'Ride'
    };

    expect(reducer([], action)).toEqual(expectedState);
  });

  it('should return currentTrip as null', () => {
    const expectedState = null;
    const action = {
      type: CANCEL_CURRENT_TRIP
    };

    expect(reducer(null, action)).toEqual(expectedState);
  });

  it('should return currentTrip as null', () => {
    const currentTrip = {
      driveOrRide: 'Ride',
      origin: {
        isOffice: true,
        zipcode: '',
        colonia: ''
      },
      destination: {
        isOffice: false,
        zipcode: '',
        colonia: ''
      }
    };
    const expectedState = null;

    const action = {
      type: SAVE_CURRENT_TRIP,
      currentTrip
    };

    expect(reducer(null, action)).toEqual(expectedState);
  });
});
