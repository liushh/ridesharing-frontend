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
      console.log('currentTrip = ', currentTrip);
      return currentTrip;
    default:
      return null;
  }
}
