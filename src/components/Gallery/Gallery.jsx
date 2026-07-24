// src/components/Gallery/Gallery.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { galleryItems } from "../../data/gallery";
import "./Gallery.css";

export default function Gallery() {
  const { t } = useTranslation();
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const open = (i) => setLightboxIdx(i);
  const close = () => setLightboxIdx(null);
  const prev = () =>
    setLightboxIdx((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const next = () => setLightboxIdx((i) => (i + 1) % galleryItems.length);

  // Keyboard nav
  const handleKey = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") close();
  };

  return (
    <section id="gallery" className="section section-cream">
      <div className="gallery-container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">{t("gallery.subtitle")}</p>
          <h2 className="section-title">{t("gallery.title")}</h2>
        </div>

        {/* Masonry-style grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`gallery-item gallery-item-${item.size}`}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              onClick={() => open(i)}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              style={{ cursor: "pointer" }}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                />
              ) : (
                <div className="gallery-placeholder">
                  <span className="gallery-placeholder-emoji">📸</span>
                  <div className="gallery-overlay">
                    <span className="gallery-overlay-cat">{item.category}</span>
                    <span className="gallery-overlay-title">{item.title}</span>
                  </div>
                </div>
              )}
              {/* Hover overlay */}
              <div className="gallery-hover-overlay">
                <span className="gallery-hover-title">{item.title}</span>
                <span className="gallery-hover-cat">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            onKeyDown={handleKey}
            tabIndex={0}
          >
            <motion.div
              className="lightbox-card"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button className="lightbox-close" onClick={close}>
                <FiX size={18} />
              </button>

              {/* Nav */}
              <button className="lightbox-nav lightbox-prev" onClick={prev}>
                <FiChevronLeft size={22} />
              </button>
              <button className="lightbox-nav lightbox-next" onClick={next}>
                <FiChevronRight size={22} />
              </button>

              {/* Image */}
              <div className="lightbox-image">
                {galleryItems[lightboxIdx].image ? (
                  <img
                    src={galleryItems[lightboxIdx].image}
                    alt={galleryItems[lightboxIdx].title}
                  />
                ) : (
                  <div className="lightbox-placeholder">
                    <span style={{ fontSize: "4rem" }}>📸</span>
                    <p
                      style={{
                        marginTop: "0.5rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      Replace with your photo
                    </p>
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="lightbox-caption">
                <span className="lightbox-cat">
                  {galleryItems[lightboxIdx].category}
                </span>
                <h4 className="lightbox-title">
                  {galleryItems[lightboxIdx].title}
                </h4>
                <p className="lightbox-desc">
                  {galleryItems[lightboxIdx].description}
                </p>
                <span className="lightbox-counter">
                  {lightboxIdx + 1} / {galleryItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
