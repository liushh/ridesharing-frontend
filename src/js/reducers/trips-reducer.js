export default function tripsReducer(state = [], action) {
  switch (action.type) {
    case 'TRIPS_LOADED':
      return action.payload;
    default:
      return state;
  }
}
