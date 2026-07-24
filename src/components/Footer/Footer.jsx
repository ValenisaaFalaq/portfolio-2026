// src/components/Footer/Footer.jsx

import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Valenisaa Falaq</h2>
          <p>
            Growing through AI, web development, and data-driven technology.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/ValenisaaFalaq"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/valenisaa-falaq"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/valenisaa_"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a href="mailto:valenisaaf@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Valenisaa Falaq. Built with React.js</p>
      </div>
    </footer>
  );
};

export default Footer;
