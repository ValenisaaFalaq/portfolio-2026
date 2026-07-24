// src/components/Hero/Hero.jsx
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiDownload, FiFolderMinus } from "react-icons/fi";
import fotoDiri from "../../assets/images/foto_diri.jpeg";
import "./Hero.css";

// Typing animation hook
function useTypingEffect(strings, speed = 60, pause = 1800) {
  const [text, setText] = useState("");
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setText(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setStrIdx((i) => (i + 1) % strings.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, strIdx, strings, speed, pause]);

  return text;
}

export default function Hero() {
  const { t } = useTranslation();
  const roles = t("hero.roles", { returnObjects: true });
  const typedText = useTypingEffect(roles);

  return (
    <section id="home" className="hero-section">
      {/* Floating decorative blobs */}
      <div className="hero-blob hero-blob-1 animate-float" />
      <div className="hero-blob hero-blob-2 animate-float-rev" />
      <div className="hero-blob hero-blob-3 animate-float-slow" />

      {/* Floating shapes */}
      <div className="hero-shape shape-circle animate-float delay-200" />
      <div className="hero-shape shape-ring animate-float-rev delay-400" />
      <div className="hero-shape shape-dot animate-float delay-600" />
      <div className="hero-shape shape-pill animate-float-slow delay-300" />

      <div className="hero-container">
        <div className="hero-grid">
          {/* ─── Left: Content ─── */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Greeting chip */}
            <motion.div
              className="hero-chip"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("hero.greeting")}
            </motion.div>

            {/* Name */}
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {t("hero.name")}
            </motion.h1>

            {/* Typing roles */}
            <motion.div
              className="hero-role-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="hero-role-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              {t("hero.tagline")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-cta-group"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a href="#projects" className="btn-primary-custom">
                <FiFolderMinus size={16} />
                {t("hero.cta_projects")}
              </a>
              {/* Replace href with actual CV link */}
              <a
                href="../../Valenisaa_Falaq_Resume(Indo).pdf"
                download
                className="btn-outline-custom"
              >
                <FiDownload size={16} />
                {t("hero.cta_cv")}
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              {/* <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Internships</span>
              </div> */}
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Curiosity</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right: Photo ─── */}
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            <div className="hero-photo-frame">
              <img
                src={fotoDiri}
                alt="Valenisaa Falaq"
                className="hero-photo"
              />
              {/* <div className="hero-photo-placeholder">
                <span className="placeholder-initials">VF</span>
                <span className="placeholder-hint">Add your photo here</span>
              </div> */}
              {/* Decorative ring behind photo */}
              <div className="photo-ring" />
              <div className="photo-ring-2" />
            </div>

            {/* Floating badge cards */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text">scroll</span>
      </motion.div>
    </section>
  );
}
