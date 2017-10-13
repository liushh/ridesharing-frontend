import React from 'react';
import PropTypes from 'prop-types';


const AddTripButtons = ({ createDriverTrip, createRiderTrip }) => (
  <div className="buttons-container">
    <div className="button" role="button" onClick={createDriverTrip}>I CAN DRIVE</div>
    <div className="button" role="button" onClick={createRiderTrip}>I NEED A RIDE/UBER</div>
  </div>
);

AddTripButtons.propTypes = {
  createDriverTrip: PropTypes.func,
  createRiderTrip: PropTypes.func
};

export default AddTripButtons;
