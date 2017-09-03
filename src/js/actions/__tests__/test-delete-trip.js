import { deleteTrip, DELETE_TRIP } from '../delete-trip';

describe('Test delete trip action', () => {
  it('should return trip that will be deleted', () => {
    const trip = {};
    const action = deleteTrip;
    const expectedAction = {
      type: DELETE_TRIP,
      trip
    };
    expect(action(trip)).toEqual(expectedAction);
  });
});
