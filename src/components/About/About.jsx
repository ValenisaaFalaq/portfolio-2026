// src/components/About/About.jsx
import { useTranslation } from "react-i18next";
import "./About.css";
import aboutPhoto from "../../assets/images/El_Foto.JPG";

export default function About() {
  const { t } = useTranslation();

  const traits = [
    { key: "curiosity", color: "var(--color-primary)" },
    { key: "adaptable", color: "#4caf7d" },
    { key: "growth", color: "var(--color-accent)" },
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="about-container">
        <div className="about-grid">
          {/* Photo */}
          <div className="about-photo-col" data-aos="fade-right">
            <div className="about-photo-frame">
              {/* Replace with: <img src={aboutPhoto} alt="Valenisaa" className="about-photo" /> */}
              <div className="about-photo-placeholder">
                {/* <span style={{ fontSize: "4rem" }}></span> */}
                <img src={aboutPhoto} alt="Valenisaa" className="about-photo" />
              </div>
              {/* Decorative accent */}
              <div className="about-photo-accent" />
            </div>

            {/* Trait chips below photo */}
            {/* <div className="about-traits">
              {traits.map((trait) => (
                <div
                  key={trait.key}
                  className="trait-chip"
                  style={{ "--trait-color": trait.color }}
                >
                  <span>{trait.icon}</span>
                  {t(`about.${trait.key}`)}
                </div>
              ))}
            </div> */}
          </div>

          {/* Content */}
          <div
            className="about-content"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <p className="section-label">{t("about.subtitle")}</p>
            <h2 className="section-title">{t("about.title")}</h2>

            <div className="about-paragraphs">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              {/* <p>{t("about.p3")}</p> */}
            </div>

            {/* Timeline dots */}
            {/* <div className="about-timeline">
              <div className="timeline-item">
                <div
                  className="timeline-dot"
                  style={{ background: "var(--color-primary)" }}
                />
                <div>
                  <div className="timeline-year">2021</div>
                  <div className="timeline-event">
                    Started Informatics Engineering
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div
                  className="timeline-dot"
                  style={{ background: "#4caf7d" }}
                />
                <div>
                  <div className="timeline-year">2023</div>
                  <div className="timeline-event">
                    First internship & AI projects
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div
                  className="timeline-dot"
                  style={{ background: "var(--color-accent)" }}
                />
                <div>
                  <div className="timeline-year">2024</div>
                  <div className="timeline-event">
                    MBKM Dicoding × IBM, exploring data & AI
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot timeline-dot-pulse" />
                <div>
                  <div className="timeline-year">Now</div>
                  <div className="timeline-event">
                    Building, learning, growing 🌱
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
