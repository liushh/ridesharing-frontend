import React, { Component } from 'react';
import PropTypes from 'prop-types';


class EditTrip extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      destinationZipCode: this.props.currentTrip.destination.zipcode,
      originZipCode: this.props.currentTrip.origin.zipcode,
      isDriver: this.props.currentTrip.isDriver,
      name: this.props.currentTrip.name,
      email: this.props.currentTrip.email
    };
  }

  _updateInputValue(stateName, newValue) {
    const stateObject = {};
    stateObject[stateName] = newValue;
    this.setState(stateObject);
  }

  _saveCurrentTrip() {
    console.log('this = ', this);
    const currentTrip = {
      name: 'LiushaAdded',
      email: 'liusha@wizeline.com',
      phone: '12345678',
      origin: {
        is_office: true,
        zipcode: '12345',
        colonia: 'americana'
      },
      destination: {
        is_office: false,
        zipcode: '12345',
        colonia: 'americana'
      }
    };

    this.props.saveCurrentTrip(currentTrip);
  }

  render() {
    return (
      <div className="edit-trip-container">
        <div className="edit-trip-row">
          <div className="cell">Destination</div>
          <div className="cell">Origin</div>
          <div className="cell">Drive/Ride</div>
          <div className="cell">Name</div>
          <div className="cell">Email</div>
        </div>
        <div className="edit-trip-row">
          <input
            value={this.state.destinationZipCode}
            className="cell"
            onChange={e => this._updateInputValue('destinationZipCode', e.target.value)} />
          <input
            value={this.state.originZipCode}
            className="cell"
            onChange={e => this._updateInputValue('originZipCode', e.target.value)} />
          <input
            value={this.state.isDriver}
            className="cell"
            onChange={e => this._updateInputValue('isDriver', e.target.value)} />
          <input
            value={this.state.name}
            className="cell"
            onChange={e => this._updateInputValue('name', e.target.value)} />
          <input
            value={this.state.email}
            className="cell"
            onChange={e => this._updateInputValue('email', e.target.value)} />
        </div>

        <div className="action-buttons">
          <div className="button" role="button" onClick={this.props.cancelCurrentTrip}>Cancel</div>
          <div className="button" role="button" onClick={this._saveCurrentTrip.bind(this)}>Save</div>
        </div>
      </div>
    );
  }
}
// const EditTrip = ({ currentTrip,
//                     cancelCurrentTrip,
//                     saveCurrentTrip }) => (

//   <div className="edit-trip-container">
//     <div className="edit-trip-row">
//       <div className="cell">Destination</div>
//       <div className="cell">Origin</div>
//       <div className="cell">Drive/Ride</div>
//       <div className="cell">Name</div>
//       <div className="cell">Email</div>
//     </div>
//     <div className="edit-trip-row">
//       <input value={currentTrip.destination.zipcode} className="cell" onChange={e => this.onTodoChange(e.target.value)/>
//       <input value={currentTrip.origin.zipcode} className="cell" />
//       <input value={currentTrip.isDriver ? 'Driver' : 'Rider'} className="cell" />
//       <input value={currentTrip.name} className="cell" />
//       <input value={currentTrip.email} className="cell" />
//     </div>

//     <div className="action-buttons">
//       <div className="button" role="button" onClick={cancelCurrentTrip}>Cancel</div>
//       <div className="button" role="button" onClick={saveCurrentTrip}>Save</div>
//     </div>
//   </div>
// );

EditTrip.propTypes = {
  currentTrip: PropTypes.object,
  saveCurrentTrip: PropTypes.func,
  cancelCurrentTrip: PropTypes.func
};

export default EditTrip;
