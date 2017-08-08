const CREATE_TRIP = 'CREATE_TRIP';

const createDriverTrip = () => {
  console.log('createDriverTrip!!!!!!!!!!!!');
  return {
    type: CREATE_TRIP,
    isDriver: true
  };
};

const createRiderTrip = () => {
  console.log('createRiderTrip ~~~~~~~~~~~~~~~~~~~~~~~');
  return {
    type: CREATE_TRIP,
    isDriver: false
  };
};

export {
  CREATE_TRIP,
  createDriverTrip,
  createRiderTrip
};
