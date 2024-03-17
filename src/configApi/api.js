import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://final-project-backend-z26e.onrender.com/api/',
});
