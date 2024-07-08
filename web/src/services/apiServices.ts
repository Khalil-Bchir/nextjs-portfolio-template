// apiService.ts
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle login and get a token
export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || 'Login failed');
  }
};

// Function to handle form creation
export const createForm = async (email: string, subject: string, message: string) => {
  try {
    const response = await api.post('/messages', { email, subject, message });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || 'Form creation failed');
  }
};

// Function to get all forms
export const getForms = async (token: string) => {
  try {
    const response = await api.get('/messages', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || 'Fetching forms failed');
  }
};