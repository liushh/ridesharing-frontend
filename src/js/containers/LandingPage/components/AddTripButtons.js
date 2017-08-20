import React from 'react';
import PropTypes from 'prop-types';


const AddTripButtons = ({ createDriverTrip, createRiderTrip }) => (
  <div className="buttons-container">
    <div className="button" role="button" onClick={createDriverTrip}>I can drive</div>
    <div className="button" role="button" onClick={createRiderTrip}>Need a ride or Uber</div>
  </div>
);

AddTripButtons.propTypes = {
  createDriverTrip: PropTypes.func,
  createRiderTrip: PropTypes.func
};

export default AddTripButtons;
