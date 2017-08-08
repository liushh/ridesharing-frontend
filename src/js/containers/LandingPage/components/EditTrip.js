import React from 'react';

const EditTrip = ({ currentTrip }) => (
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
      <div className="button">Cancel</div>
      <div className="button">Save</div>
    </div>
  </div>
);

export default EditTrip;
