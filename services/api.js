import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const env = 'prod';

export const urlApi =
  env === 'dev'
    ? 'http://localhost:3333'
    : 'https://knots-whatsapp.herokuapp.com';

const api = axios.create({
  baseURL: urlApi,
  timeout: 30000,
  headers,
});

export default api;
