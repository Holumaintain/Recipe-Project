// File: src/components/layout/Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "../../assets/css/custom.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/Categories", label: "Categories" },
    { path: "/create-recipe", label: "Create Recipe" },
    { path: "/meal-plans", label: "Meal Plans" },
    { path: "/profile", label: "Profile" },
    { path: "/login", label: "Login" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <header className="shadow-sm bg-white sticky-top">
      <nav className="navbar navbar-expand-md navbar-light container-fluid py-2 px-4">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand fw-bold h4 m-0"
          style={{ letterSpacing: "1px" }}
        >
          RecipeShare
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop links */}
        <div className="d-none d-md-flex align-items-center ms-auto gap-3">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold border-bottom border-2" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link to="/signup" className="btn btn-primary btn-sm rounded-pill">
            Join Free
          </Link>

          <button
            className="btn btn-outline-dark btn-sm rounded-circle p-2"
            onClick={toggleSearch}
          >
            <FiSearch size={18} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="d-md-none w-100 bg-white shadow-sm position-absolute top-100 start-0 overflow-hidden"
            >
              <ul className="navbar-nav flex-column p-3">
                {navLinks.map(({ path, label }) => (
                  <li className="nav-item mb-2" key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "fw-bold" : ""}`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li className="mt-2">
                  <Link
                    to="/signup"
                    className="btn btn-primary w-100 rounded-pill"
                    onClick={() => setMenuOpen(false)}
                  >
                    Join Free
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex justify-content-center align-items-center"
              style={{ zIndex: 1050 }}
            >
              <div className="position-relative w-75">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="form-control form-control-lg"
                  autoFocus
                />
                <button
                  className="btn btn-link position-absolute top-0 end-0 mt-2 me-2"
                  onClick={toggleSearch}
                >
                  <FiX size={24} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
