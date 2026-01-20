import axios from "axios";

// Base API URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data; // { token, user }
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

// Get current user profile
export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // { id, name, email, ... }
  } catch (error) {
    console.error("Failed to fetch profile:", error.response?.data || error.message);
    throw error;
  }
};
