import { CREATE_TRIP } from '../actions/create-trip';
import { CANCEL_CURRENT_TRIP } from '../actions/cancel-current-trip';
import { SAVE_CURRENT_TRIP } from '../actions/save-current-trip';
import { EDIT_TRIP } from '../actions/edit-trip';

const moment = require('moment');

export default function CurrentTripReducer(state = null, action) {
  switch (action.type) {
    case CREATE_TRIP:
      const newTrip = {
        origin: {
          isOffice: localStorage.getItem('isFromOffice') || false,
          zipcode: localStorage.getItem('destinationZipcode') || '45050',
          colonyOrDistrict: localStorage.getItem('originColonyOrDistrict') || 'Jardines del Sol'
        },
        destination: {
          isOffice: localStorage.getItem('isToOffice') || false,
          zipcode: localStorage.getItem('destinationZipcode') || '94107',
          colonyOrDistrict: localStorage.getItem('destinationColonyOrDistrict') || 'SOMA'
        },
        driveOrRide: action.driveOrRide,
        time: moment().add(30, 'minutes'),
      };
      console.log('newTrip.time = ', newTrip.time);
      console.log('newTrip.time.format = ', newTrip.time.format('YYYY/M/D HH:mm'));
      return Object.assign({}, newTrip);
    case EDIT_TRIP:
      return Object.assign({}, action.trip);
    case CANCEL_CURRENT_TRIP:
    case SAVE_CURRENT_TRIP:
    default:
      return null;
  }
}
