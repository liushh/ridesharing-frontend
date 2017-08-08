import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddTripButtons from './components/AddTripButtons';
import TripsTable from './components/TripsTable';
import EditTrip from './components/EditTrip';
import { createDriverTrip,
         createRiderTrip } from '../../actions/create-trip';


const LandingPage = props => (
  <div>
    <AddTripButtons
      createDriverTrip={props.createDriverTrip}
      createRiderTrip={props.createRiderTrip} />
    {(props.currentTrip != null) ? <EditTrip currentTrip={props.currentTrip} /> : null}
    <TripsTable trips={props.trips} />
  </div>
);

LandingPage.propTypes = {
  trips: PropTypes.array,
  isCreatingTrip: PropTypes.bool,
  isEditingTrip: PropTypes.bool,
  createTrip: PropTypes.func
};

const mapStateToProps = state => {
  console.log('state.trips = ', state.trips);
  console.log('state.currentTrip = ', state.currentTrip);
  return {
    trips: state.trips,
    currentTrip: state.currentTrip
  };
};

const mapDispatchToComponent = dispatch => ({
  createDriverTrip: () => dispatch(createDriverTrip()),
  createRiderTrip: () => dispatch(createRiderTrip())
});

export default connect(mapStateToProps, mapDispatchToComponent)(LandingPage);
