const SHOW_TRIPS_CLOSED_TO_MINE = 'SHOW_TRIPS_CLOSED_TO_MINE';

const showTripsClosedToMine = () => {
  return {
    type: SHOW_TRIPS_CLOSED_TO_MINE,
    tripFilter: 'tripsClosedToMine'
  };
};

export {
  SHOW_TRIPS_CLOSED_TO_MINE,
  showTripsClosedToMine
};
