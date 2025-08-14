import axios from 'axios';

// Create axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor
API.interceptors.request.use(
  (config) => {
    // Add any auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message || 'Something went wrong';
    console.error('API Error:', message);
    return Promise.reject(new Error(message));
  }
);

// API endpoints
export const contactAPI = {
  submitContact: (data) => API.post('/contacts', data),
  subscribeNewsletter: (email) => API.post('/contacts/newsletter', { email })
};

export const servicesAPI = {
  getAll: () => API.get('/services'),
  getById: (id) => API.get(`/services/${id}`)
};

export const projectsAPI = {
  getAll: () => API.get('/projects'),
  getById: (id) => API.get(`/projects/${id}`)
};

export const teamAPI = {
  getAll: () => API.get('/team'),
  getById: (id) => API.get(`/team/${id}`)
};

export const blogAPI = {
  getAll: (params) => API.get('/blog', { params }),
  getById: (id) => API.get(`/blog/${id}`)
};

export default API;