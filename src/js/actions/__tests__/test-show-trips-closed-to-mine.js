import { SHOW_TRIPS_CLOSED_TO_MINE, showTripsClosedToMine } from '../show-trips-closed-to-mine';

describe('Test show-my-trips action', () => {
  it('should return SHOW_MY_TRIPS action', () => {
    const expectedAction = {
      type: SHOW_TRIPS_CLOSED_TO_MINE,
      tripFilter: SHOW_TRIPS_CLOSED_TO_MINE
    };

    const action = showTripsClosedToMine();

    expect(action).toEqual(expectedAction);
  });
});
