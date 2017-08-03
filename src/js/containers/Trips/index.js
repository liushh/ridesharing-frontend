import React from 'react';
import { connect } from 'react-redux';

const Trips = () => (
  <div>
    This is a trip list
  </div>
);

const mapStateToProps = state => {
  console.log('state.trips = ', state.trips);
  return {
    trips: state.trips
  };
};

export default connect(mapStateToProps)(Trips);
