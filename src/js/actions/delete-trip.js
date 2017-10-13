import { TripAPI } from '../resources';

const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS';
const DELETE_TRIP = 'DELETE_TRIP';

const deleteTripSuccess = trip => {
  console.log('deleted trip = ', trip);
  return {
    type: DELETE_TRIP_SUCCESS,
    trip
  };
};


const deleteTrip = trip => {
  return dispatch => {
    const tripAPI = new TripAPI();
    return tripAPI.deleteTrip(trip)
                  .then(deletedTrip => {
                    dispatch(deleteTripSuccess(deletedTrip));
                  });
  };
};


export {
  DELETE_TRIP,
  DELETE_TRIP_SUCCESS,
  deleteTrip
};
