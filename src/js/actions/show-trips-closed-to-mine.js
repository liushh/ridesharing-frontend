const SHOW_TRIPS_CLOSED_TO_MINE = 'SHOW_TRIPS_CLOSED_TO_MINE';

const showTripsClosedToMine = () => {
  return {
    type: SHOW_TRIPS_CLOSED_TO_MINE,
    tripFilter: SHOW_TRIPS_CLOSED_TO_MINE
  };
};

export {
  SHOW_TRIPS_CLOSED_TO_MINE,
  showTripsClosedToMine
};
