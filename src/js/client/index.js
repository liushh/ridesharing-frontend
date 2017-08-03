import axios from 'axios';

axios.defaults.baseURL = 'base_url';
axios.defaults.headers['Content-Type'] = 'application/json';

export default axios;
