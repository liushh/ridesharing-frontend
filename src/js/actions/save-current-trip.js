import { TripAPI } from '../resources';

const SAVE_CURRENT_TRIP = 'SAVE_CURRENT_TRIP';
const SAVE_TRIP_SUCCESS = 'SAVE_TRIP_SUCCESS';


const saveTripSuccess = trip => {
  return {
    type: SAVE_TRIP_SUCCESS,
    trip
  };
};

const saveCurrentTrip = currentTrip => {
  console.log('saveCurrentTrip currentTrip = ', currentTrip);
  return dispatch => {
    const tripAPI = new TripAPI();
    return tripAPI.saveTrip(currentTrip)
                  .then(trip => {
                    dispatch(saveTripSuccess(trip));
                  });
  };
};

export {
  SAVE_TRIP_SUCCESS,
  SAVE_CURRENT_TRIP,
  saveCurrentTrip
};
