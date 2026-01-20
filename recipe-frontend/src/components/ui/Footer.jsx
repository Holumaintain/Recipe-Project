import React from "react";
import logo from "../../assets/images/logo.png"; // fixed relative path
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css"; // footer-specific CSS

const Footer = () => {
  return (
    <footer>
      {/* Logo */}
      <img src={logo} alt="RecipeShare Logo" className="logo" />

      {/* Copyright */}
      <p>&copy; {new Date().getFullYear()} RecipeShare. All rights reserved.</p>

      {/* Made with love */}
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://1.envato.market/cartzilla-laravel"
          target="_blank"
          rel="noreferrer"
        >
          Holumaintain
        </a>
      </p>

      {/* Privacy / Terms Links */}
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link> |{" "}
        <Link to="/terms">Terms of Service</Link>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
