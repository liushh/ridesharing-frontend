import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid';
import { SHOW_MY_TRIPS } from '../../../actions/show-my-trips';


class TripsTable extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.columns = [
      { key: 'name', name: 'Name' },
      { key: 'email', name: 'Email' },
      { key: 'phone', name: 'Phone' },
      { key: 'origin', name: 'Origin' },
      { key: 'destination', name: 'Destination' }
    ];
  }

  componentWillReceiveProps(newProps) {
    if (newProps.tripFilter === SHOW_MY_TRIPS) {
      this.columns = [
        { key: 'name', name: 'Name' },
        { key: 'email', name: 'Email' },
        { key: 'phone', name: 'Phone' },
        { key: 'origin', name: 'Origin' },
        { key: 'destination', name: 'Destination' },
        { key: 'actions', name: 'Actions' }
      ];
      this.forceUpdate();
    }
  }

  rowGetter(i) {
    const currentRowData = this.props.trips[i];
    const currentRow = {
      name: currentRowData.name,
      email: currentRowData.email,
      phone: currentRowData.phone,
      origin: this._formatLocation('origin', currentRowData),
      destination: this._formatLocation('destination', currentRowData),
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
    if (currentRowData.isOffice) {
      return 'Office';
    }
    return currentRowData[location].colonia.concat(' - ', currentRowData[location].zipcode);
  }

  _getFilterSection() {
    return (
      <div className="filters-container">
        <div className="filter" role="button" onClick={this.props.showAllTrips}>All trips</div>
        <div className="filter"
             role="button"
             onClick={this.props.showTripsClosedToMine}>Close to mine</div>
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
          columns={this.columns}
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
