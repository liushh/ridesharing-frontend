import { SAVE_CURRENT_TRIP } from '../actions/save-current-trip';

const defaultTrips = [
  {
    name: 'Liusha',
    email: 'liusha@wizeline.com',
    phone: '12345678',
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
  },
  {
    name: 'Beto',
    email: 'alberto@wizeline.com',
    phone: '12345678',
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
  },
  {
    name: 'Diego',
    email: 'diego@wizeline.com',
    phone: '12345678',
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
  },
  {
    name: 'Liusha',
    email: 'liusha@wizeline.com',
    phone: '12345678',
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


export default function tripsReducer(state = defaultTrips, action) {
  switch (action.type) {
    case 'TRIPS_LOADED':
      return action.payload;
    case SAVE_CURRENT_TRIP:
      state.push(action.currentTrip);
      return Object.assign([], state);
    default:
      return state;
  }
}
