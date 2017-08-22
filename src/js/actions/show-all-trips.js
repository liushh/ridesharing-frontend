const SHOW_ALL_TRIPS = 'SHOW_ALL_TRIPS';

const showAllTrips = () => {
  return {
    type: SHOW_ALL_TRIPS,
    tripFilter: SHOW_ALL_TRIPS
  };
};

export {
  SHOW_ALL_TRIPS,
  showAllTrips
};
