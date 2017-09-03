import { SAVE_CURRENT_TRIP } from '../actions/save-current-trip';
import { DELETE_TRIP } from '../actions/delete-trip';

const defaultTrips = [
  {
    id: Math.floor((Math.random() * 10000) + 1),
    name: 'Liusha',
    email: 'liusha@wizeline.com',
    phone: '12345678',
    driveOrRide: 'Ride',
    origin: {
      is_office: true,
      zipcode: '12345',
      colonia: 'americana'
    },
    destination: {
      is_office: false,
      zipcode: '12345',
      colonia: 'americana'
    }
  }
];

const _isSavingEditedTrip = trip => {
  return !!trip.id;
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

export default function tripsReducer(trips = defaultTrips, action) {
  switch (action.type) {
    case 'TRIPS_LOADED':
      return action.payload;
    case SAVE_CURRENT_TRIP:
      const currentTrip = action.currentTrip;
      if (_isSavingEditedTrip(currentTrip)) {
        const newTrips = _replaceEditedTrip(trips, currentTrip);
        return Object.assign([], newTrips);
      }
      currentTrip.id = Math.floor((Math.random() * 10000) + 1);
      return Object.assign([], trips.push(currentTrip));
    case DELETE_TRIP:
      const newTrips = _deleteTrip(trips, action.trip);
      return Object.assign([], newTrips);
    default:
      return trips;
  }
}
