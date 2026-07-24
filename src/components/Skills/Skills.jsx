// src/components/Skills/Skills.jsx
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiCode,
  FiCpu,
  FiGlobe,
  FiDatabase,
  FiPenTool,
  FiBriefcase,
} from "react-icons/fi";
import { skillCategories } from "../../data/skills";
import "./Skills.css";

// Animated progress bar
function SkillBar({ name, level, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay); //[cite: 6]
          observer.disconnect(); //[cite: 6]
        }
      },
      { threshold: 0.3 }, //[cite: 6]
    );
    if (ref.current) observer.observe(ref.current); //[cite: 6]
    return () => observer.disconnect(); //[cite: 6]
  }, [level, delay]); //[cite: 6]

  return (
    <div className="skill-bar-item" ref={ref}>
      <div className="skill-bar-label">
        <span>{name}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: `${width}%`, //[cite: 6]
            transition: `width 0.9s ease ${delay}ms`, //[cite: 6]
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation(); //[cite: 6]

  // Helper function to render Feather icons instead of emojis
  const renderIcon = (id) => {
    switch (id) {
      case "programming":
        return <FiCode size={24} />;
      case "ai_data":
        return <FiCpu size={24} />;
      case "web_dev":
        return <FiGlobe size={24} />;
      case "databases_tools":
        return <FiDatabase size={24} />;
      case "engineering":
        return <FiPenTool size={24} />;
      case "professional":
        return <FiBriefcase size={24} />;
      default:
        return <FiCode size={24} />;
    }
  };

  return (
    <section id="skills" className="section section-cream">
      <div className="skills-container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">{t("skills.subtitle")}</p>
          <h2 className="section-title">{t("skills.title")}</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.id}
              className={`skill-card card-modern ${cat.exploring ? "skill-card-exploring" : ""}`} //[cite: 6]
              data-aos="fade-up"
              data-aos-delay={ci * 70}
            >
              {/* Header */}
              <div className="skill-card-header">
                <span className="skill-cat-icon text-gray-700">
                  {renderIcon(cat.id)}
                </span>
                <h3 className="skill-cat-title">{cat.label}</h3>
                {cat.exploring && (
                  <span className="skill-exploring-badge">Exploring</span> //[cite: 6]
                )}
              </div>

              {/* Note for exploring */}
              {cat.note && (
                <p className="skill-note">{t("skills.exploring_note")}</p> //[cite: 6]
              )}

              {/* Soft skills = tags */}
              {cat.type === "tags" ? (
                <div className="skill-tags-group">
                  {cat.skills.map((s) => (
                    <span key={s} className="skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              ) : (
                /* Progress bars */
                <div className="skill-bars">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={si * 100}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
