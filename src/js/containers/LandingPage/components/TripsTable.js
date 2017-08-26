import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid';


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

  rowGetter(i) {
    const currentRowData = this.props.trips[i];
    const currentRow = {
      name: currentRowData.name,
      email: currentRowData.email,
      phone: currentRowData.phone,
      origin: this._formatLocation('origin', currentRowData),
      destination: this._formatLocation('destination', currentRowData)
    };

    return currentRow;
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
        <div className="filter" role="button" onClick={this.props.showTripsClosedToMine}>Close to mine</div>
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
  showTripsClosedToMine: PropTypes.func
};

export default TripsTable;
