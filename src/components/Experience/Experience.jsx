// src/components/Experience/Experience.jsx
import { useTranslation } from "react-i18next";
import { experiences } from "../../data/experience";
import "./Experience.css";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section section-cream">
      <div className="exp-container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">{t("experience.subtitle")}</p>
          <h2 className="section-title">{t("experience.title")}</h2>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="exp-card card-modern"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Left: icon + line */}
              {/* <div className="exp-icon-col">
                <div className="exp-icon">{exp.icon}</div>
                {i < experiences.length - 1 && <div className="exp-line" />}
              </div> */}

              {/* Right: content */}
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    {/* Mengambil title dan company dinamis menggunakan ID dari file json */}
                    <h3 className="exp-title">
                      {t(`experience.items.${exp.id}.title`)}
                    </h3>
                    <p className="exp-company">
                      {t(`experience.items.${exp.id}.company`)}
                    </p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-type">
                      {t(`experience.items.${exp.id}.type`)}
                    </span>
                    <span className="exp-duration">
                      {t(`experience.items.${exp.id}.duration`)}
                    </span>
                  </div>
                </div>
                {/* Mengambil description dinamis menggunakan ID dari file json */}
                <p className="exp-desc">
                  {t(`experience.items.${exp.id}.description`)}
                </p>
                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
