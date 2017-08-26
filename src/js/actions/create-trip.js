const CREATE_TRIP = 'CREATE_TRIP';

const createDriverTrip = () => {
  return {
    type: CREATE_TRIP,
    driveOrRide: 'Drive'
  };
};

const createRiderTrip = () => {
  return {
    type: CREATE_TRIP,
    driveOrRide: 'Ride'
  };
};

export {
  CREATE_TRIP,
  createDriverTrip,
  createRiderTrip
};
