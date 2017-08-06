import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddTripButtons from './components/AddTripButtons';
import TripsTable from './components/TripsTable';


const LandingPage = props => (
  <div>
    <AddTripButtons />
    <TripsTable trips={props.trips} />
  </div>
);

LandingPage.propTypes = {
  trips: PropTypes.array
};

const mapStateToProps = state => {
  return {
    trips: state.trips
  };
};

export default connect(mapStateToProps)(LandingPage);
