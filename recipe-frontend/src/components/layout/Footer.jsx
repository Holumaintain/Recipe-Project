import React from "react";
import logo from "../../assets/images/logo.png"; // fixed relative path
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="RecipeShare Logo" className="logo" />
      <p>&copy; {new Date().getFullYear()} RecipeShare. All rights reserved.</p>
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
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
