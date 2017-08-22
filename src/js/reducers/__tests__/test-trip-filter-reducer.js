import reducer from '../trip-filter-reducer';
import { SHOW_ALL_TRIPS, showAllTrips } from '../../actions/show-all-trips';
import { SHOW_MY_TRIPS, showMyTrips } from '../../actions/show-my-trips';
import { SHOW_TRIPS_CLOSED_TO_MINE, showTripsClosedToMine } from '../../actions/show-trips-closed-to-mine';


describe('Test trip filter reducer', () => {
  it('should return initial state=SHOW_ALL_TRIPS ', () => {
    expect(reducer(null, showAllTrips())).toEqual(SHOW_ALL_TRIPS);
  });

  it('should return initial state=SHOW_MY_TRIPS ', () => {
    expect(reducer(null, showMyTrips())).toEqual(SHOW_MY_TRIPS);
  });

  it('should return initial state=SHOW_TRIPS_CLOSED_TO_MINE ', () => {
    expect(reducer(null, showTripsClosedToMine())).toEqual(SHOW_TRIPS_CLOSED_TO_MINE);
  });
});
