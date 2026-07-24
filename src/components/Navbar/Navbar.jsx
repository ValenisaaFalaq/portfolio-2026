// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import "./Navbar.css";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "learning", href: "#learning" },
  { key: "gallery", href: "#gallery" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Glass blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Brand */}
        <a
          className="navbar-brand-custom"
          href="#home"
          onClick={() => handleNavClick("#home")}
        >
          <span className="brand-logo">VF</span>
          <span className="brand-name">Valenisaa</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links-desktop">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className={`nav-link-custom ${active === link.key ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {t(`nav.${link.key}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: language toggle + hamburger */}
        <div className="navbar-right">
          <LanguageToggle />
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className={`mobile-link ${active === link.key ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
          >
            {t(`nav.${link.key}`)}
          </a>
        ))}
        <div className="mobile-lang">
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
