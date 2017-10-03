import client from '../client';

class TripAPI {
  fetchTrips() {
    return client.get('/api/trips')
          .then(response => response.data);
  }
}

export default TripAPI;
