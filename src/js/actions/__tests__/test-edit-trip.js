import { editTrip, EDIT_TRIP } from '../edit-trip';

describe('Test edit trip action', () => {
  it('should return trip under editing', () => {
    const trip = {};
    const action = editTrip;
    const expectedAction = {
      type: EDIT_TRIP,
      trip
    };
    expect(action(trip)).toEqual(expectedAction);
  });
});
