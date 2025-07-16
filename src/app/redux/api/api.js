import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_API_BASE_URL || 'http://localhost:3000/api',
});

export const loginUserGetAPI = async () => {
  try {
    const result = await axiosInstance.get('/login');
    return result;
  } catch (error) {
    toast.error(error.message);
  }
};

export const loginUserPostAPI = async (payload) => {
  try {
    const result = await axiosInstance.post('/login', payload);
    if (result.status === 200) {
      toast.success('Login successful!');
    } else {
      toast.error('Login failed. Please try again.');
    }
    return result;
  } catch (error) {
    toast.error(error.message);
  }
};

export const loginUserByIdAPI = async (userId) => {
  try {
    const result = await axiosInstance.get(`/user/${userId}`);
    return result;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logOutAPI = async () => {
  try {
    const result = await axiosInstance.post('/logout');
    return result;
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateUserProfileAPI = async (payload) => {
  try {
    const result = await axiosInstance.put('/profile', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    toast.error(error.message);
  }
};
