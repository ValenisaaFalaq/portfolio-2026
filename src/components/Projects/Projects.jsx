// src/components/Projects/Projects.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next"; //[cite: 3]
import { motion, AnimatePresence } from "framer-motion"; //[cite: 3]
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiCpu,
  FiGlobe,
  FiPenTool,
  FiSettings,
  FiFolder,
  FiDatabase,
  FiYoutube,
} from "react-icons/fi"; //[cite: 3]
import { projects, projectCategories } from "../../data/projects"; //[cite: 3]
import "./Projects.css"; //[cite: 3]

export default function Projects() {
  const { t } = useTranslation(); //[cite: 3]
  const [filter, setFilter] = useState("all"); //[cite: 3]
  const [modal, setModal] = useState(null); //[cite: 3]

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter); //[cite: 3]

  const filterLabel = (cat) => {
    const map = {
      all: t("projects.filter_all"),
      data: t("projects.filter_data") || "Data",
      web: t("projects.filter_web"),
      ai: t("projects.filter_ai"),
      academic: t("projects.filter_academic"),
      uiux: t("projects.filter_uiux"),
      engineering: t("projects.filter_engineering"),
    };
    return map[cat] || cat; //[cite: 3]
  };

  // Helper function to render proper icons instead of emojis
  const renderCategoryIcon = (category, size = 32) => {
    switch (category) {
      case "ai":
        return <FiCpu size={size} />;
      case "web":
        return <FiGlobe size={size} />;
      case "uiux":
        return <FiPenTool size={size} />;
      case "engineering":
        return <FiSettings size={size} />;
      case "data":
        return <FiDatabase size={size} />;
      default:
        return <FiFolder size={size} />;
    }
  };

  return (
    <section id="projects" className="section section-alt">
      <div className="proj-container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">{t("projects.subtitle")}</p>
          <h2 className="section-title">{t("projects.title")}</h2>
        </div>

        {/* Filter tabs */}
        <div className="proj-filters" data-aos="fade-up" data-aos-delay="80">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {filterLabel(cat)}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div className="proj-grid" layout>
          <AnimatePresence>
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="proj-card card-modern"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                {/* Image */}
                <div className="proj-image">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} /> //[cite: 3]
                  ) : (
                    <div className="proj-image-placeholder">
                      <span className="proj-placeholder-icon text-gray-400">
                        {renderCategoryIcon(proj.category)}
                      </span>
                    </div>
                  )}
                  {proj.featured && (
                    <span className="proj-featured">Featured</span> //[cite: 3]
                  )}
                </div>

                {/* Body */}
                <div className="proj-body">
                  <h3 className="proj-title">{proj.title}</h3>
                  <p className="proj-desc">{proj.description}</p>

                  <div className="proj-tags">
                    {proj.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="tech-badge badge-accent">
                        +{proj.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="proj-actions">
                    <button
                      className="proj-btn-detail"
                      onClick={() => setModal(proj)}
                    >
                      {t("projects.view_details")}
                    </button>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-btn-icon"
                        title="GitHub"
                      >
                        <FiGithub size={17} />
                      </a>
                    )}
                    {proj.youtube && (
                      <a
                        href={proj.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-btn-icon"
                        title="Watch Presentation"
                      >
                        <FiYoutube size={17} />
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-btn-icon"
                        title="Live Demo"
                      >
                        <FiExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ─── Modal ─── */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setModal(null)}>
                <FiX size={20} />
              </button>

              <div className="modal-image">
                {modal.image ? (
                  <img src={modal.image} alt={modal.title} /> //[cite: 3]
                ) : (
                  <div className="proj-image-placeholder modal-placeholder">
                    <span className="proj-placeholder-icon text-gray-400">
                      {renderCategoryIcon(modal.category, 64)}
                    </span>
                  </div>
                )}
              </div>

              <div className="modal-body">
                <h3 className="modal-title">{modal.title}</h3>
                <p className="modal-desc">{modal.description}</p>

                <div className="modal-tags">
                  {modal.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="modal-actions">
                  {modal.github && (
                    <a
                      href={modal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-custom"
                    >
                      <FiGithub size={16} />
                      {t("projects.view_github")}
                    </a>
                  )}
                  {modal.live && (
                    <a
                      href={modal.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-custom"
                    >
                      <FiExternalLink size={16} />
                      {t("projects.view_live")}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
