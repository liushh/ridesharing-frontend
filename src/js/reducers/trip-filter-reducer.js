import { SHOW_ALL_TRIPS } from '../actions/show-all-trips';

const tripFilterReducer = (state = SHOW_ALL_TRIPS, action) => {
  return action.type;
};

export default tripFilterReducer;
