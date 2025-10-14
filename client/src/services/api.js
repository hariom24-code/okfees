import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Institute Auth
export const registerInstitute = (formData) => API.post('/auth/register', formData);
export const loginInstitute = (formData) => API.post('/auth/login', formData);

// You can add other API calls here
