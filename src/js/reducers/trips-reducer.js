import { SAVE_TRIP_SUCCESS } from '../actions/save-current-trip';
import { DELETE_TRIP_SUCCESS } from '../actions/delete-trip';
import { FETCH_TRIPS_SUCCESS } from '../actions/fetch-trips';

const _isSavingEditedTrip = (trips, savedTrip) => {
  for (let i = 0; i < trips.length; i++) {
    const trip = trips[i];
    if (trip.id === savedTrip.id) {
      return true;
    }
  }
  return false;
};


const _replaceEditedTrip = (trips, editedTrip) => {
  const newTrips = trips.map(trip => {
    if (trip.id === editedTrip.id) {
      return editedTrip;
    }
    return trip;
  });
  return newTrips;
};

const _deleteTrip = (trips, deletedTrip) => {
  const newTrips = trips.filter(trip => {
    if (trip.id === deletedTrip.id) {
      return false;
    }
    return true;
  });
  return newTrips;
};


export default function tripsReducer(trips = [], action) {
  switch (action.type) {
    case FETCH_TRIPS_SUCCESS:
      return action.trips;
    case SAVE_TRIP_SUCCESS:
      const savedTrip = action.trip;
      if (_isSavingEditedTrip(trips, savedTrip)) {
        const newTrips = _replaceEditedTrip(trips, savedTrip);
        return Object.assign([], newTrips);
      }
      trips.unshift(savedTrip);
      return Object.assign([], trips);
    case DELETE_TRIP_SUCCESS:
      const newTrips = _deleteTrip(trips, action.trip);
      return Object.assign([], newTrips);
    default:
      return trips;
  }
}
