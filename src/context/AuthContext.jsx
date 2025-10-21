// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (you might check with backend)
    // For now, we'll just set loading to false
    setLoading(false);
  }, []);

  const login = (authData) => {
    setUser(authData.user);
    setUserType(authData.userType);
    setToken(authData.token);
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
    setToken(null);
  };

  const value = {
    user,
    userType,
    token,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};