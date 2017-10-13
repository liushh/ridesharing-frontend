import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Datetime from 'react-datetime';

const moment = require('moment');

const officeZipcode = '45050';
const officeColony = 'Jardines del Sol';


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
    console.log('props.currentTrip = ', props.currentTrip);
    const stateObject = {
      destinationZipcode: props.currentTrip.destination.zipcode,
      destinationColonyOrDistrict: props.currentTrip.destination.colonyOrDistrict,

      originColonyOrDistrict: props.currentTrip.origin.colonyOrDistrict,
      originZipcode: props.currentTrip.origin.zipcode,

      driveOrRide: props.currentTrip.driveOrRide,

      time: props.currentTrip.time,
      isFromOffice: props.currentTrip.origin.isOffice,
      isToOffice: props.currentTrip.destination.isOffice
    };

    return stateObject;
  }

  _updateInputValue(stateName, newValue) {
    const stateObject = {};
    stateObject[stateName] = newValue;
    if (stateName === 'isToOffice') {
      stateObject.destinationZipcode = officeZipcode;
      stateObject.destinationColonyOrDistrict = officeColony;
      stateObject.isFromOffice = false;
    } else if (stateName === 'isFromOffice') {
      stateObject.originZipcode = officeZipcode;
      stateObject.originColonyOrDistrict = officeColony;
      stateObject.isToOffice = false;
    }
    this.setState(stateObject);
  }

  _saveCurrentTrip() {
    const currentTrip = {
      id: this.props.currentTrip.id,
      name: this.props.currentUser.name,
      email: this.props.currentUser.email,
      phone: this.props.currentUser.phone,
      driveOrRide: this.state.driveOrRide,
      time: this.state.time.utc().format('YYYY-M-DDTHH:mm:00 Z'),
      origin: {
        isOffice: this.state.isFromOffice,
        zipcode: this.state.originZipcode,
        colonyOrDistrict: this.state.originColonyOrDistrict
      },
      destination: {
        isOffice: this.state.isToOffice,
        zipcode: this.state.destinationZipcode,
        colonyOrDistrict: this.state.destinationColonyOrDistrict
      }
    };
    this._saveLocationsInLocal();
    this.props.saveCurrentTrip(currentTrip);
  }

  _saveLocationsInLocal() {
    localStorage.setItem('isFromOffice', this.state.isFromOffice);
    localStorage.setItem('originZipcode', this.state.originZipcode);
    localStorage.setItem('originColonyOrDistrict', this.state.originColonyOrDistrict);
    localStorage.setItem('isToOffice', this.state.isToOffice);
    localStorage.setItem('destinationZipcode', this.state.destinationZipcode);
    localStorage.setItem('destinationColonyOrDistrict', this.state.destinationColonyOrDistrict);
  }

  render() {
    return (
      <div className="edit-trip-container">
        <div className="edit-trip-row">
          <label>
          Destination
          <input
            placeholder="destination zipcode"
            value={this.state.destinationZipcode}
            className="cell-bottom"
            onChange={e => this._updateInputValue('destinationZipcode', e.target.value)} />
          <input
            placeholder="destination colony"
            value={this.state.destinationColonyOrDistrict}
            className="cell-bottom"
            onChange={e => this._updateInputValue('destinationColonyOrDistrict', e.target.value)} />
          <input
              type="radio"
              name="isOffice"
              className="cell-bottom"
              checked={this.state.isToOffice}
              onChange={e => this._updateInputValue('isToOffice', true)} />
          to the office
          </label>
        </div>
        <div className="edit-trip-row">
          <label>
          Origin
          <input
            placeholder="origin zipcode"
            value={this.state.originZipcode}
            className="cell-bottom"
            onChange={e => this._updateInputValue('originZipcode', e.target.value)} />
          <input
            placeholder="origin colony"
            value={this.state.originColonyOrDistrict}
            className="cell-bottom"
            onChange={e => this._updateInputValue('originColonyOrDistrict', e.target.value)} />
          <input
              type="radio"
              name="isOffice"
              className="cell-bottom"
              checked={this.state.isFromOffice}
              onChange={e => this._updateInputValue('isFromOffice', true)} />
          from the office
          </label>
        </div>

        <div className="edit-trip-row">
          <Datetime
            defaultValue={this.state.time}
            onChange={date => this._updateInputValue('time', date)} />
          <label>
            <input
              type="radio"
              name="driveOrRide"
              className="cell-bottom"
              checked={this.state.driveOrRide === 'Drive'}
              onChange={e => this._updateInputValue('driveOrRide', 'Drive')} />
            Drive
          </label>
          <label>
            <input
              type="radio"
              name="driveOrRide"
              className="cell-bottom"
              checked={this.state.driveOrRide === 'Ride'}
              onChange={e => this._updateInputValue('driveOrRide', 'Ride')} />
            Ride
          </label>
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
  currentTrip: PropTypes.object,
  currentUser: PropTypes.object,
  saveCurrentTrip: PropTypes.func,
  cancelCurrentTrip: PropTypes.func
};

export default EditTrip;
