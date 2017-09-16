import { SAVE_CURRENT_TRIP } from '../actions/save-current-trip';
import { DELETE_TRIP } from '../actions/delete-trip';

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

const moment = require('moment');

const _deleteTrip = (trips, deletedTrip) => {
  const newTrips = trips.filter(trip => {
    if (trip.id === deletedTrip.id) {
      return false;
    }
    return true;
  });
  return newTrips;
};

const originalTrips = [{
  driveOrRide: 'Drive',
  hoursAndMinutes: moment().format('HH:mm'),
  day: moment().format('DD'),
  month: moment().format('MMM'),
  origin: {
    isOffice: false,
    zipcode: '44160 ',
    colonia: 'Americana'
  },
  destination: {
    isOffice: true,
    zipcode: '45050',
    colonia: 'Zapopan'
  },
  id: 123456,
  name: 'Liusha Huang',
  email: 'liusha@wizeline.com',
  phone: '1234567890',
}];


export default function tripsReducer(trips = originalTrips, action) {
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
      trips.push(currentTrip);
      return Object.assign([], trips);
    case DELETE_TRIP:
      const newTrips = _deleteTrip(trips, action.trip);
      return Object.assign([], newTrips);
    default:
      return trips;
  }
}
