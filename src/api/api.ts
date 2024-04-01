import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_STARBEAR_SERVER_URL,
});

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_STARBEAR_SERVER_URL,
});
