import { combineReducers } from 'redux';
import tripsReducer from './trips-reducer';
import currentTripReducer from './current-trip-reducer';
import currentUserReducer from './current-user-reducer';

const allReducers = combineReducers({
  trips: tripsReducer,
  currentTrip: currentTripReducer,
  currentUser: currentUserReducer
});

export default allReducers;
