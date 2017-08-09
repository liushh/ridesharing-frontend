import React from 'react';
import PropTypes from 'prop-types';

const EditTrip = ({ currentTrip,
                    cancelCurrentTrip,
                    saveCurrentTrip }) => (

  <div className="edit-trip-container">
    <div className="edit-trip-row">
      <div className="cell">Destination</div>
      <div className="cell">Origin</div>
      <div className="cell">Drive/Ride</div>
      <div className="cell">Name</div>
      <div className="cell">Email</div>
    </div>
    <div className="edit-trip-row">
      <input value={currentTrip.destination.zipcode} className="cell" />
      <input value={currentTrip.origin.zipcode} className="cell" />
      <input value={currentTrip.isDriver ? 'Driver' : 'Rider'} className="cell" />
      <input value={currentTrip.name} className="cell" />
      <input value={currentTrip.email} className="cell" />
    </div>

    <div className="action-buttons">
      <div className="button" role="button" onClick={cancelCurrentTrip}>Cancel</div>
      <div className="button" role="button" onClick={saveCurrentTrip}>Save</div>
    </div>
  </div>
);

EditTrip.propTypes = {
  currentTrip: PropTypes.object,
  saveCurrentTrip: PropTypes.func,
  cancelCurrentTrip: PropTypes.func
};

export default EditTrip;
