import { SAVE_CURRENT_TRIP, saveCurrentTrip } from '../save-current-trip';

describe('Test save-current-trip', () => {
  it('should return SAVE_CURRENT_TRIP action', () => {
    const expectedAction = {
      type: SAVE_CURRENT_TRIP
    };

    const action = saveCurrentTrip();

    expect(action).toEqual(expectedAction);
  });
});
