import { SHOW_MY_TRIPS, showMyTrips } from '../show-my-trips';

describe('Test show-my-trips action', () => {
  it('should return SHOW_MY_TRIPS action', () => {
    const expectedAction = {
      type: SHOW_MY_TRIPS,
      tripFilter: 'myTrips'
    };

    const action = showMyTrips();

    expect(action).toEqual(expectedAction);
  });
});
