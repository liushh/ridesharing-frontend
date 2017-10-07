import { CREATE_TRIP } from '../actions/create-trip';
import { CANCEL_CURRENT_TRIP } from '../actions/cancel-current-trip';
import { SAVE_CURRENT_TRIP } from '../actions/save-current-trip';
import { EDIT_TRIP } from '../actions/edit-trip';

const moment = require('moment');

export default function CurrentTripReducer(state = null, action) {
  switch (action.type) {
    case CREATE_TRIP:
      const newTrip = {
        driveOrRide: action.driveOrRide,
        time: moment().add(30, 'minutes'),
        origin: {
          isOffice: false,
          zipcode: '45050',
          colonyOrDistrict: 'Jardines del Sol'
        },
        destination: {
          isOffice: false,
          zipcode: '94107',
          colonyOrDistrict: 'SOMA'
        }
      };
      return Object.assign({}, newTrip);
    case EDIT_TRIP:
      return Object.assign({}, action.trip);
    case CANCEL_CURRENT_TRIP:
    case SAVE_CURRENT_TRIP:
    default:
      return null;
  }
}
