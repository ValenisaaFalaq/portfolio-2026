// src/components/LanguageToggle/LanguageToggle.jsx
import { useTranslation } from "react-i18next";
import "./Languagetoggle.css";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const isEN = i18n.language === "en";

  const toggle = () => {
    i18n.changeLanguage(isEN ? "id" : "en");
  };

  return (
    <button
      className="lang-toggle"
      onClick={toggle}
      aria-label="Toggle language"
    >
      <span className={`lang-option ${isEN ? "active" : ""}`}>EN</span>
      <span className="lang-divider">|</span>
      <span className={`lang-option ${!isEN ? "active" : ""}`}>ID</span>
    </button>
  );
}
