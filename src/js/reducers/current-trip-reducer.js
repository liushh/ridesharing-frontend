import { CREATE_TRIP } from '../actions/create-trip';
import { CANCEL_CURRENT_TRIP } from '../actions/cancel-current-trip';
import { SAVE_CURRENT_TRIP } from '../actions/save-current-trip';

const emptyTrip = {
  driveOrRide: 'Ride',
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

export default function CurrentTripReducer(state = null, action) {
  switch (action.type) {
    case CREATE_TRIP:

      const emptyTrip = {
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
      console.log('returning a new trip');
        //     const currentTrip = emptyTrip;
        // console.log('!!!!!!!!!!!!!!!!!!!!!action = ', action);
        // currentTrip.driveOrRide = action.driveOrRide;
        // return Object.assign({}, currentTrip);
      return Object.assign({}, emptyTrip);
    case CANCEL_CURRENT_TRIP:
    case SAVE_CURRENT_TRIP:
    default:
      return null;
  }
}
