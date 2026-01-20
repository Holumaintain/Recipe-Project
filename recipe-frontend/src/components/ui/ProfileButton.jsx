// src/components/ui/ProfileButton.jsx
import React from "react";
import { useAuth } from "../../hooks/useAuth"; // <-- note curly braces

const ProfileButton = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <a href="/login">Login</a>
      )}
    </div>
  );
};

export default ProfileButton;
