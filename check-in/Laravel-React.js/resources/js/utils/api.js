import axios from 'axios';

const api = axios.create({
    baseURL: 'http://check-in.test/api'
});

export default api;