import { SHOW_ALL_TRIPS, showAllTrips } from '../show-all-trips';

describe('Test show-all-trips action', () => {
  it('should return SHOW_ALL_TRIPS action', () => {
    const expectedAction = {
      type: SHOW_ALL_TRIPS,
      tripFilter: 'allTrips'
    };

    const action = showAllTrips();

    expect(action).toEqual(expectedAction);
  });
});
