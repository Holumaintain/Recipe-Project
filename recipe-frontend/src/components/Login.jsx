// File: src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic demo logic; replace with your auth logic
    if (email === "user@example.com" && password === "password") {
      setError("");
      // Navigate to home page after login
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center py-5" style={{ minHeight: "80vh" }}>
      <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login to RecipeShare</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
        </form>

        <div className="text-center">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-primary fw-bold">Join Free</Link>
        </div>
      </div>
    </div>
  );
}
