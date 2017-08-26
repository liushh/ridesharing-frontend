const CREATE_TRIP = 'CREATE_TRIP';

const createDriverTrip = () => {
  console.log('create drive trip button clicked');
  return {
    type: CREATE_TRIP,
    driveOrRide: 'Drive'
  };
};

const createRiderTrip = () => {
  console.log('create ride trip button clicked');
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
