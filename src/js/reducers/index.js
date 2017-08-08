import { combineReducers } from 'redux';
import tripsReducer from './trips-reducer';
import currentTripReducer from './current-trip-reducer';

const allReducers = combineReducers({
  trips: tripsReducer,
  currentTrip: currentTripReducer
});

export default allReducers;
