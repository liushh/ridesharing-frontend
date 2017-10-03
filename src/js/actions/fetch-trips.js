import { TripAPI } from '../resources';

const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS';

const fetchTripsSuccess = trips => {
  return {
    type: FETCH_TRIPS_SUCCESS,
    trips
  };
};

const fetchTrips = () => {
  return dispatch => {
    const tripAPI = new TripAPI();
    return tripAPI.fetchTrips()
                  .then(trips => {
                    dispatch(fetchTripsSuccess(trips));
                  });
  };
};

export {
  FETCH_TRIPS_SUCCESS,
  fetchTripsSuccess,
  fetchTrips
};
