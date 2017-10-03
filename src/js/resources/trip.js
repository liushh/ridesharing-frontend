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
}

export default TripAPI;
