import { combineReducers } from 'redux';
import tripsReducer from './trips-reducer';

const allReducers = combineReducers({
  trips: tripsReducer
});

export default allReducers;
