import { CREATE_TRIP } from '../actions/create-trip';

const emptyTrip = {
  name: 'Liusha',
  email: 'liusha@wizeline.com',
  phone: '1234567890',
  origin: {
    is_office: true,
    zipcode: '54321',
    colonia: 'Jardin de sol'
  },
  destination: {
    is_office: false,
    zipcode: '12345',
    colonia: 'Americana'
  }
};

export default function CurrentTripReducer(state = null, action) {
  switch (action.type) {
    case CREATE_TRIP:
      const currentTrip = emptyTrip;
      currentTrip.isDriver = action.isDriver;
      return currentTrip;
    case CANCEL_CURRENT_TRIP:
      return null;
    case SAVE_CURRENT_TRIP:
      return null;
    default:
      return null;
  }
}
