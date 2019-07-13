import axios from 'axios';

const axiosBase = axios.create({
  baseURL: 'https://create-burger-app-ceb1a.firebaseio.com/'
});

export default axiosBase;
