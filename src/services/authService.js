// src/services/api/authService.js

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// 🟢 Login function
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Login failed');
    return data;
  } catch (error) {
    throw error;
  }
};

// 🟢 Register function
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Registration failed');
    return data;
  } catch (error) {
    throw error;
  }
};

// 🟢 Verify payment for student registration
export const verifyPayment = async (paymentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/payment/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Payment verification failed');
    return data;
  } catch (error) {
    throw error;
  }
};

// 🟢 Logout function
export const logoutUser = () => {
  // Clear any stored auth data
  return Promise.resolve();
};

// ✅ Add a default export so it works with "import authService from ..."
const authService = {
  loginUser,
  registerUser,
  verifyPayment,
  logoutUser,
};

export default authService;
