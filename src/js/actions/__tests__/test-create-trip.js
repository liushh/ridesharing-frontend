import { createDriverTrip, createRiderTrip, CREATE_TRIP } from '../create-trip';

describe('Test create trip action', () => {
  it('should driver trip', () => {
    const action = createDriverTrip();

    const expectedAction = {
      type: CREATE_TRIP,
      driveOrRide: 'Drive'
    };
    expect(action).toEqual(expectedAction);
  });

  it('should rider trip', () => {
    const isDriver = false;
    const action = createRiderTrip(isDriver);

    const expectedAction = {
      type: CREATE_TRIP,
      driveOrRide: 'Ride'
    };
    expect(action).toEqual(expectedAction);
  });
});
