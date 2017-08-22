const SHOW_MY_TRIPS = 'SHOW_MY_TRIPS';

const showMyTrips = () => {
  return {
    type: SHOW_MY_TRIPS,
    tripFilter: 'myTrips'
  };
};

export {
  SHOW_MY_TRIPS,
  showMyTrips
};
