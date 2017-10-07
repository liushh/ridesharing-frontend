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
    const isToOffice = props.currentTrip.destination.isOffice;
    const isFromOffice = props.currentTrip.origin.isOffice;

    const stateObject = {
      destinationZipCode: props.currentTrip.destination.zipcode,
      destinationColony: props.currentTrip.destination.colonyOrDistrict,

      originColony: props.currentTrip.origin.colonyOrDistrict,
      originZipCode: props.currentTrip.origin.zipcode,

      driveOrRide: props.currentTrip.driveOrRide,

      time: props.currentTrip.time,
      isToOffice,
      isFromOffice
    };

    return stateObject;
  }


  _updateInputValue(stateName, newValue) {
    console.log('stateName = ', stateName);
    console.log('newValue = ', newValue);

    const stateObject = {};
    stateObject[stateName] = newValue;
    if (stateName === 'isToOffice') {
      stateObject['destinationZipCode'] = officeZipcode;
      stateObject['destinationColony'] = officeColony;
      stateObject['isFromOffice'] = false;
    } else if (stateName === 'isFromOffice') {
      stateObject['originZipCode'] = officeZipcode;
      stateObject['originColony'] = officeColony;
      stateObject['isToOffice'] = false;
    }

    console.log('stateObject = ', stateObject);
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
        zipcode: this.state.originZipCode,
        colonyOrDistrict: this.state.originColony
      },
      destination: {
        isOffice: this.state.isToOffice,
        zipcode: this.state.destinationZipCode,
        colonyOrDistrict: this.state.destinationColony
      }
    };
    console.log('currentTrip = ', currentTrip);
    this.props.saveCurrentTrip(currentTrip);
  }

  render() {
    console.log('this.state = ', this.state);
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
            value={this.state.destinationColony}
            className="cell-bottom"
            onChange={e => this._updateInputValue('destinationColony', e.target.value)} />
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
            value={this.state.originZipCode}
            className="cell-bottom"
            onChange={e => this._updateInputValue('originZipCode', e.target.value)} />
          <input
            placeholder="origin colony"
            value={this.state.originColony}
            className="cell-bottom"
            onChange={e => this._updateInputValue('originColony', e.target.value)} />
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
            defaultValue={moment()}
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
