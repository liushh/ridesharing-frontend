import { combineReducers } from 'redux';
import tripsReducer from './trips-reducer';
import currentTripReducer from './current-trip-reducer';
import currentUserReducer from './current-user-reducer';
import tripFilterReducer from './trip-filter-reducer';

const allReducers = combineReducers({
  trips: tripsReducer,
  currentTrip: currentTripReducer,
  currentUser: currentUserReducer,
  tripFilter: tripFilterReducer
});

export default allReducers;
