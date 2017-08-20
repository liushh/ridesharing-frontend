const SAVE_CURRENT_TRIP = 'SAVE_CURRENT_TRIP';

const saveCurrentTrip = currentTrip => {
  return {
    type: SAVE_CURRENT_TRIP,
    currentTrip
  };
};

export {
  SAVE_CURRENT_TRIP,
  saveCurrentTrip
};
