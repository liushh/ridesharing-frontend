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
  }
];


export default function tripsReducer(state = defaultTrips, action) {
  switch (action.type) {
    case 'TRIPS_LOADED':
      return action.payload;
    default:
      return defaultTrips;
  }
}
