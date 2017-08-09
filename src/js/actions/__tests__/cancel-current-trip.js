import { cancelCurrentTrip, CANCEL_CURRENT_TRIP } from '../cancel-current-trip';

describe('Test clear-current-trip action', () => {
  it('should return CLEAR_CURRENT_TRIP action', () => {
    const expectedAction = {
      type: CANCEL_CURRENT_TRIP,
    };

    const action = cancelCurrentTrip();

    expect(action).toEqual(expectedAction);
  });
});
