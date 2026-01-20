// src/components/ui/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/recipes?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar sticky-top">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link to="/" className="logo">
          RecipeShare
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links + search + buttons */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipes" onClick={() => setIsOpen(false)}>
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/categories" onClick={() => setIsOpen(false)}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/meal-plans" onClick={() => setIsOpen(false)}>
              Meal Plans
            </Link>
          </li>
          <li>
            <Link to="/create-recipe" onClick={() => setIsOpen(false)}>
              Create Recipe
            </Link>
          </li>

          {/* Search Bar */}
          <li>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">🔍</button>
            </form>
          </li>

          {/* Join Free / Profile */}
          <li className="profile-button-wrapper">
            <ProfileButton />
            <Link to="/login" className="btn btn-primary ms-2">
              Join Free
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
