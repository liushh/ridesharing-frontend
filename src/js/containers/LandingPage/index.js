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


const LandingPage = props => (
  <div>
    <AddTripButtons
      createDriverTrip={props.createDriverTrip}
      createRiderTrip={props.createRiderTrip} />
    {(props.currentTrip != null) ?
      <EditTrip
        currentTrip={props.currentTrip}
        cancelCurrentTrip={props.cancelCurrentTrip}
        saveCurrentTrip={props.saveCurrentTrip} /> : null}
    <TripsTable trips={props.trips} />
  </div>
);

LandingPage.propTypes = {
  trips: PropTypes.array,
  currentTrip: PropTypes.object,
  createDriverTrip: PropTypes.func,
  createRiderTrip: PropTypes.func,
  saveCurrentTrip: PropTypes.func,
  cancelCurrentTrip: PropTypes.func
};

const mapStateToProps = state => {
  return {
    trips: state.trips,
    currentTrip: state.currentTrip
  };
};

const mapDispatchToComponent = dispatch => ({
  createDriverTrip: currentTrip => dispatch(createDriverTrip(currentTrip)),
  createRiderTrip: currentTrip => dispatch(createRiderTrip(currentTrip)),
  saveCurrentTrip: currentTrip => dispatch(saveCurrentTrip(currentTrip)),
  cancelCurrentTrip: () => dispatch(cancelCurrentTrip()),

  showAllTrips: () => dispatch(showAllTrips()),
  showTripsClosedToMine: () => showTripsClosedToMine(showMineTrips()),
  showMineTrips: () => dispatch(showMineTrips())
});

export default connect(mapStateToProps, mapDispatchToComponent)(LandingPage);
