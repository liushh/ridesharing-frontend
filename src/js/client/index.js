import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers['Content-Type'] = 'application/json';

export default axios;
