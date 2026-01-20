// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { loginUser, getProfile } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login function
  const login = async (credentials) => {
    const token = await loginUser(credentials);
    if (token) {
      localStorage.setItem("token", token);
      const profile = await getProfile(token);
      setUser(profile);
      setIsAuthenticated(true);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  // Load user from token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile(token).then((profile) => {
        setUser(profile);
        setIsAuthenticated(true);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook for easier access
export const useAuth = () => useContext(AuthContext);
