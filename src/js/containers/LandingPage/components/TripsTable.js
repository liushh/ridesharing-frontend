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
    let formatedLocation = '';
    if (currentRowData[location].is_office) {
      formatedLocation = 'Office';
    } else {
      formatedLocation = currentRowData[location].colonia.concat('(', currentRowData[location].zipcode, ')');
    }
    return formatedLocation;
  }

  _getFilterSection() {
    return (
      <div className="filters-container">
        <div className="filter">All trips</div>
        <div className="filter">Close to mine</div>
        <div className="filter">My trips</div>
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
  trips: PropTypes.array
};

export default TripsTable;
