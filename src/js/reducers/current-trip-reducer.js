import { CREATE_TRIP } from '../actions/create-trip';
import { CANCEL_CURRENT_TRIP } from '../actions/cancel-current-trip';
import { SAVE_CURRENT_TRIP } from '../actions/save-current-trip';

const emptyTrip = {
  isDriver: true,
  name: '',
  email: '',
  phone: '',
  origin: {
    is_office: true,
    zipcode: '',
    colonia: ''
  },
  destination: {
    is_office: false,
    zipcode: '',
    colonia: ''
  }
};

export default function CurrentTripReducer(state = null, action) {
  switch (action.type) {
    case CREATE_TRIP:
      const currentTrip = emptyTrip;
      currentTrip.isDriver = action.isDriver;
      return currentTrip;
    case CANCEL_CURRENT_TRIP:
    case SAVE_CURRENT_TRIP:
    default:
      return null;
  }
}
