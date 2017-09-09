import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddTripButtons from './components/AddTripButtons';
import TripsTable from './components/TripsTable';
import EditTrip from './components/EditTrip';
import { createDriverTrip,
         createRiderTrip } from '../../actions/create-trip';
import { cancelCurrentTrip } from '../../actions/cancel-current-trip';
import { saveCurrentTrip } from '../../actions/save-current-trip';
import { deleteTrip } from '../../actions/delete-trip';
import { editTrip } from '../../actions/edit-trip';


import { SHOW_ALL_TRIPS, showAllTrips } from '../../actions/show-all-trips';
import { SHOW_MY_TRIPS, showMyTrips } from '../../actions/show-my-trips';
import { SHOW_TRIPS_CLOSED_TO_MINE, showTripsClosedToMine } from '../../actions/show-trips-closed-to-mine';


const _getMyTrips = trips => {
  return trips.filter(item => item.email === 'liusha@wizeline.com');
};

const _getTripsClosedToMine = trips => {
  return [trips];
};

const _filterTrips = (filter, trips) => {
  switch (filter) {
    case SHOW_MY_TRIPS:
      return _getMyTrips(trips);
    case SHOW_TRIPS_CLOSED_TO_MINE:
      return _getTripsClosedToMine(trips);
    case SHOW_ALL_TRIPS:
    default:
      return trips;
  }
};

const LandingPage = props => (
  <div>
    <AddTripButtons
      createDriverTrip={props.createDriverTrip}
      createRiderTrip={props.createRiderTrip} />
    {(props.currentTrip != null) ?
      <EditTrip
        currentTrip={props.currentTrip}
        currentUser={props.currentUser}
        cancelCurrentTrip={props.cancelCurrentTrip}
        saveCurrentTrip={props.saveCurrentTrip} /> : null}
    <TripsTable
      trips={_filterTrips(props.tripFilter, props.trips)}
      showAllTrips={props.showAllTrips}
      showMyTrips={props.showMyTrips}
      showTripsClosedToMine={props.showTripsClosedToMine}
      tripFilter={props.tripFilter}

      deleteTrip={props.deleteTrip}
      editTrip={props.editTrip} />
  </div>
);

LandingPage.propTypes = {
  trips: PropTypes.array,
  currentTrip: PropTypes.object,
  currentUser: PropTypes.object,
  tripFilter: PropTypes.string,

  createDriverTrip: PropTypes.func,
  createRiderTrip: PropTypes.func,
  saveCurrentTrip: PropTypes.func,
  cancelCurrentTrip: PropTypes.func,
  deleteTrip: PropTypes.func,
  editTrip: PropTypes.func,

  showAllTrips: PropTypes.func,
  showMyTrips: PropTypes.func,
  showTripsClosedToMine: PropTypes.func
};

const mapStateToProps = state => {
  return {
    trips: state.trips,
    currentUser: state.currentUser,
    currentTrip: state.currentTrip,
    tripFilter: state.tripFilter
  };
};

const mapDispatchToComponent = dispatch => ({
  createDriverTrip: currentTrip => dispatch(createDriverTrip(currentTrip)),
  createRiderTrip: currentTrip => dispatch(createRiderTrip(currentTrip)),
  saveCurrentTrip: currentTrip => dispatch(saveCurrentTrip(currentTrip)),
  cancelCurrentTrip: () => dispatch(cancelCurrentTrip()),
  deleteTrip: trip => dispatch(deleteTrip(trip)),
  editTrip: trip => dispatch(editTrip(trip)),

  showAllTrips: () => dispatch(showAllTrips()),
  showTripsClosedToMine: () => dispatch(showTripsClosedToMine()),
  showMyTrips: () => dispatch(showMyTrips())
});

export default connect(mapStateToProps, mapDispatchToComponent)(LandingPage);
