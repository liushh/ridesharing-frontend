const moment = require('moment');

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid';
import { SHOW_MY_TRIPS } from '../../../actions/show-my-trips';

const GENERAL_TRIP_COLUMNS = [
  { key: 'origin', name: 'From' },
  { key: 'destination', name: 'To' },
  { key: 'time', name: 'Time' },
  { key: 'driveOrRide', name: 'Drive/Ride' },
  { key: 'name', name: 'Name' },
  { key: 'email', name: 'Email' },
  { key: 'phone', name: 'Phone' }
];

const MY_TRIP_COLUMNS = [
  { key: 'origin', name: 'Origin' },
  { key: 'destination', name: 'Destination' },
  { key: 'time', name: 'Time' },
  { key: 'driveOrRide', name: 'Drive/Ride' },
  { key: 'name', name: 'Name' },
  { key: 'email', name: 'Email' },
  { key: 'phone', name: 'Phone' },
  { key: 'actions', name: 'Actions' }
];


class TripsTable extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { columns: GENERAL_TRIP_COLUMNS };
  }

  componentWillReceiveProps(newProps) {
    const columns = newProps.tripFilter === SHOW_MY_TRIPS ? MY_TRIP_COLUMNS : GENERAL_TRIP_COLUMNS;
    this.setState({ columns });
  }

  rowGetter(i) {
    const currentRowData = this.props.trips[i];
    currentRowData.time = moment.utc(currentRowData.time, 'YYYY-MM-DD HH:mm').local();
    if (currentRowData.id === 90) {
      console.log('currentRowData.time = ', currentRowData.time);
      console.log('currentRowData.time.format(YYYY/M/D HH:mm);', currentRowData.time.format('YYYY/M/D HH:mm'));
    }
    const currentRow = {
      origin: this._formatLocation('origin', currentRowData),
      destination: this._formatLocation('destination', currentRowData),
      time: this._formatTime(currentRowData),
      driveOrRide: currentRowData.driveOrRide,
      name: currentRowData.name,
      email: currentRowData.email,
      phone: currentRowData.phone || '-',
      actions: this._getActionButtons(currentRowData)
    };
    return currentRow;
  }

  _getActionButtons(currentRowData) {
    return (
      <div className="action-button-group">
        <div className="action-button"
             role="button"
             onClick={this._editButtonClicked.bind(this, currentRowData)}>Edit</div>
        <div className="action-button"
             role="button"
             onClick={this._deleteButtonClicked.bind(this, currentRowData)}>Delete</div>
      </div>
    );
  }

  _editButtonClicked(currentRowData) {
    this.props.editTrip(currentRowData);
  }

  _deleteButtonClicked(currentRowData) {
    this.props.deleteTrip(currentRowData);
  }

  _formatLocation(location, currentRowData) {
    if (currentRowData[location].isOffice) {
      return 'Office';
    }
    return currentRowData[location].colonyOrDistrict.concat(' - ', currentRowData[location].zipcode);
  }

  _formatTime(currentRowData) {
    return currentRowData.time.format('YYYY/M/D HH:mm');
  }

  _getFilterSection() {
    return (
      <div className="filters-container">
        <div className="filter" role="button" onClick={this.props.showAllTrips}>All trips</div>
        <div className="filter" role="button" onClick={this.props.showMyTrips}>My trips</div>
      </div>
    );
  }

  render() {
    const filterSection = this._getFilterSection();
    return (
      <div>
        {filterSection}
        <ReactDataGrid
          columns={this.state.columns}
          rowGetter={this.rowGetter.bind(this)}
          rowsCount={this.props.trips.length}
          minHeight={500} />
      </div>
    );
  }
}

TripsTable.propTypes = {
  trips: PropTypes.array,
  showAllTrips: PropTypes.func,
  showMyTrips: PropTypes.func,
  showTripsClosedToMine: PropTypes.func,
  tripFilter: PropTypes.string,

  deleteTrip: PropTypes.func,
  editTrip: PropTypes.func
};

export default TripsTable;
