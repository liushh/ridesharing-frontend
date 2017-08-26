import { CREATE_TRIP } from '../actions/create-trip';
import { CANCEL_CURRENT_TRIP } from '../actions/cancel-current-trip';
import { SAVE_CURRENT_TRIP } from '../actions/save-current-trip';

export default function CurrentTripReducer(state = null, action) {
  switch (action.type) {
    case CREATE_TRIP:
      const newTrip = {
        driveOrRide: action.driveOrRide,
        origin: {
          isOffice: true,
          zipcode: '',
          colonia: ''
        },
        destination: {
          isOffice: false,
          zipcode: '',
          colonia: ''
        }
      };
      return Object.assign({}, newTrip);
    case CANCEL_CURRENT_TRIP:
    case SAVE_CURRENT_TRIP:
    default:
      return null;
  }
}
