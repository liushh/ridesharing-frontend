import client from '../client';

class TripAPI {
  fetchTrips() {
    return client.get('/api/trips')
          .then(response => response.data);
  }

  saveTrip(trip) {
    return client.post('/api/trips', trip)
          .then(response => response.data);
  }

  updateTrip(trip) {
    return client.put('/api/trips', trip)
          .then(response => response.data);
  }

  deleteTrip(trip) {
    return client.delete('/api/trips/'.concat(trip.id))
          .then(response => response.data);
  }
}

export default TripAPI;
