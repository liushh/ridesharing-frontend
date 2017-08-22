import { createDriverTrip, createRiderTrip, CREATE_TRIP } from '../create-trip';

describe('Test create trip action', () => {
  it('should driver trip', () => {
    const action = createDriverTrip();

    const expectedAction = {
      type: CREATE_TRIP,
      isDriver: true
    };
    expect(action).toEqual(expectedAction);
  });

  it('should rider trip', () => {
    const isDriver = false;
    const action = createRiderTrip(isDriver);

    const expectedAction = {
      type: CREATE_TRIP,
      isDriver: false
    };
    expect(action).toEqual(expectedAction);
  });
});
