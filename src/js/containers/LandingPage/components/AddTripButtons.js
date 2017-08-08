import React from 'react';


const AddTripButtons = props => (
  <div className="buttons-container">
    <div role="button" className="button" onClick={props.createDriverTrip}>I can drive</div>
    <div className="button" onClick={props.createRiderTrip}>Need a ride or Uber</div>
  </div>
);

export default AddTripButtons;
