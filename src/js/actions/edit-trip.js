const EDIT_TRIP = 'EDIT_TRIP';

const editTrip = trip => {
  return {
    type: EDIT_TRIP,
    trip
  };
};

export {
  EDIT_TRIP,
  editTrip
};
