import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Datetime from 'react-datetime';

const moment = require('moment');

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
    console.log('time   =  ', props.currentTrip.time);
    const time = moment.utc(props.currentTrip.time, 'YYYY-MM-DD HH:mm');

    const stateObject = {
      destinationZipCode: isToOffice ? 'Office' : props.currentTrip.destination.zipcode,
      destinationColonia: isToOffice ? 'Office' : props.currentTrip.destination.colonyOrDistrict,

      originColonia: isFromOffice ? 'Office' : props.currentTrip.origin.colonyOrDistrict,
      originZipCode: isFromOffice ? 'Office' : props.currentTrip.origin.zipcode,

      driveOrRide: props.currentTrip.driveOrRide,

      hoursAndMinutes: time.format('HH:mm'),
      day: time.format('DD'),
      month: time.format('MM')
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
      id: this.props.currentTrip.id,
      name: this.props.currentUser.name,
      email: this.props.currentUser.email,
      phone: this.props.currentUser.phone,
      driveOrRide: this.state.driveOrRide,
      time: this._formatTime(this.state.month, this.state.day, this.state.hoursAndMinutes),
      origin: {
        is_office: this.state.originColonia === 'Office',
        zipcode: this.state.originZipCode,
        colonyOrDistrict: this.state.originColonia
      },
      destination: {
        is_office: this.state.destinationColonia === 'Office',
        zipcode: this.state.destinationZipCode,
        colonyOrDistrict: this.state.destinationColonia
      }
    };
    this.props.saveCurrentTrip(currentTrip);
  }

  _formatTime(month, day, hoursAndMinutes) {
    const time = moment('2017-'.concat(month, '-', day, ' ', hoursAndMinutes), 'YYYY-M-DD HH:mm');
    return time.utc().format('YYYY-M-DDTHH:mm:00 Z');
  }

  render() {
    return (
      <div className="edit-trip-container">
        <div className="edit-trip-row">
          <label>
          Destination
          <input
            placeholder="destination zipcode"
            value={this.state.destinationZipCode}
            className="cell-bottom"
            onChange={e => this._updateInputValue('destinationZipCode', e.target.value)} />
          <input
            placeholder="destination colony"
            value={this.state.destinationColonia}
            className="cell-bottom"
            onChange={e => this._updateInputValue('destinationColonia', e.target.value)} />
          <input
              type="radio"
              name="is_office"
              value={this.state.driveOrRide}
              className="cell-bottom"
              onChange={e => this._updateInputValue('DriveOrRide', e.target.value)} />
          to the office
          </label>
        </div>
        <div className="edit-trip-row">
          <label>
          Origin
          <input
            placeholder="origin zipcode"
            value={this.state.originZipCode}
            className="cell-bottom"
            onChange={e => this._updateInputValue('originZipCode', e.target.value)} />
          <input
            placeholder="origin colony"
            value={this.state.originColonia}
            className="cell-bottom"
            onChange={e => this._updateInputValue('originColonia', e.target.value)} />
          <input
              type="radio"
              name="is_office"
              value={this.state.driveOrRide}
              className="cell-bottom"
              onChange={e => this._updateInputValue('DriveOrRide', e.target.value)} />
          from the office
          </label>
        </div>

        <div className="edit-trip-row">
          <Datetime
            defaultValue={moment()} />
          <label>
            <input
              type="radio"
              name="driveOrRide"
              value={this.state.driveOrRide}
              className="cell-bottom"
              onChange={e => this._updateInputValue('DriveOrRide', e.target.value)} />
            Drive
          </label>
          <label>
            <input
              type="radio"
              name="driveOrRide"
              value={this.state.driveOrRide}
              className="cell-bottom"
              onChange={e => this._updateInputValue('DriveOrRide', e.target.value)} />
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
