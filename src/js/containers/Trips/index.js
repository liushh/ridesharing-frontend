import React from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';


const Trips = React.createClass({
  getInitialState() {
    this._columns = [
      { key: 'name', name: 'Name' },
      { key: 'email', name: 'Email' },
      { key: 'phone', name: 'Phone' },
      { key: 'origin', name: 'Origin' },
      { key: 'destination', name: 'Destination' }
    ];

    return null;
  },

  rowGetter(i) {
    const currentRowData = this.props.trips[i];
    let currentRow = {
      name: currentRowData.name,
      email: currentRowData.email,
      phone: currentRowData.phone,
    };
    if (currentRowData.origin.is_office) {
      currentRow.origin = 'Office';
    } else {
      currentRow.origin = currentRowData.origin.colonia + '(' + currentRowData.origin.zipcode + ')';
    }

    if (currentRowData.destination.is_office) {
      currentRow.destination = 'Office';
    } else {
      currentRow.destination = currentRowData.destination.colonia + '(' + currentRowData.destination.zipcode + ')';
    }
    return currentRow;
  },

  render() {
    return (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.props.trips.length}
        minHeight={500} />);
  }
});


const mapStateToProps = state => {
  return {
    trips: state.trips
  };
};

export default connect(mapStateToProps)(Trips);
