const DELETE_TRIP = 'DELETE_TRIP';

const deleteTrip = trip => {
  return {
    type: DELETE_TRIP,
    trip
  };
};

export {
  DELETE_TRIP,
  deleteTrip
};
