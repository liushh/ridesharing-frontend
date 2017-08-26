import React, { Component } from 'react';
import PropTypes from 'prop-types';


class EditTrip extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = this._getState(this.props);
  }

  componentWillReceiveProps(newProps) {
    const stateObject = this._getState(newProps);
    this.setState(stateObject);
  }

  _getState(props) {
    const isToOffice = props.currentTrip.destination.isOffice;
    const isFromOffice = props.currentTrip.origin.isOffice;
    const stateObject = {
      destinationZipCode: isToOffice ? 'Office' : props.currentTrip.destination.zipcode,
      destinationColonia: isToOffice ? 'Office' : props.currentTrip.destination.colonia,

      originColonia: isFromOffice ? 'Office' : props.currentTrip.origin.colonia,
      originZipCode: isFromOffice ? 'Office' : props.currentTrip.origin.zipcode,

      driveOrRide: props.currentTrip.driveOrRide
    };

    return stateObject;
  }


  _updateInputValue(stateName, newValue) {
    const stateObject = {};
    stateObject[stateName] = newValue;
    this.setState(stateObject);
  }

  _saveCurrentTrip() {
    const currentTrip = {
      name: this.props.currentUser.name,
      email: this.props.currentUser.email,
      phone: this.props.currentUser.phone,
      driveOrRide: this.state.driveOrRide,
      origin: {
        is_office: this.state.originColonia === 'Office',
        zipcode: this.state.originZipCode,
        colonia: this.state.originColonia
      },
      destination: {
        is_office: this.state.destinationColonia === 'Office',
        zipcode: this.state.destinationZipCode,
        colonia: this.state.destinationColonia
      }
    };

    this.props.saveCurrentTrip(currentTrip);
  }

  render() {
    return (
      <div className="edit-trip-container">
        <div className="edit-trip-row">
          <div className="cell-top">Destination Zipcode</div>
          <div className="cell-top">Destination Colonia</div>
          <div className="cell-top">Origin Colonia</div>
          <div className="cell-top">Origin Zipcode</div>
        </div>
        <div className="edit-trip-row">
          <input
            value={this.state.destinationZipCode}
            className="cell-bottom"
            onChange={e => this._updateInputValue('destinationZipCode', e.target.value)} />
          <input
            value={this.state.destinationColonia}
            className="cell-bottom"
            onChange={e => this._updateInputValue('destinationColonia', e.target.value)} />
          <input
            value={this.state.originZipCode}
            className="cell-bottom"
            onChange={e => this._updateInputValue('originZipCode', e.target.value)} />
          <input
            value={this.state.originColonia}
            className="cell-bottom"
            onChange={e => this._updateInputValue('originColonia', e.target.value)} />
        </div>
        <div className="edit-trip-row">
          <div className="cell-top">Drive/Ride</div>
          <div className="cell-top">Name</div>
          <div className="cell-top">Email</div>
          <div className="cell-top">Phone</div>
        </div>

        <div className="edit-trip-row">
          <input
            value={this.state.driveOrRide}
            className="cell-bottom"
            onChange={e => this._updateInputValue('DriveOrRide', e.target.value)} />
          <input
            value={this.props.currentUser.name}
            className="cell-bottom"
            onChange={e => this._updateInputValue('name', e.target.value)} />
          <input
            value={this.props.currentUser.email}
            className="cell-bottom"
            onChange={e => this._updateInputValue('email', e.target.value)} />
          <input
            value={this.props.currentUser.phone}
            className="cell-bottom"
            onChange={e => this._updateInputValue('phone', e.target.phone)} />
        </div>

        <div className="action-buttons">
          <div
            className="button"
            role="button"
            onClick={this.props.cancelCurrentTrip}>Cancel</div>
          <div
            className="button"
            role="button"
            onClick={this._saveCurrentTrip.bind(this)}>Save</div>
        </div>
      </div>
    );
  }
}

EditTrip.propTypes = {
  currentUser: PropTypes.object,
  saveCurrentTrip: PropTypes.func,
  cancelCurrentTrip: PropTypes.func
};

export default EditTrip;
