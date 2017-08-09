const CANCEL_CURRENT_TRIP = 'CANCEL_CURRENT_TRIP';

const cancelCurrentTrip = () => {
  return {
    type: CANCEL_CURRENT_TRIP
  };
};


export {
  CANCEL_CURRENT_TRIP,
  cancelCurrentTrip
};
