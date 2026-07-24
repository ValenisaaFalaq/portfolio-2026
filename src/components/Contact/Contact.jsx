// src/components/Contact/Contact.jsx
import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import "./Contact.css";

const contacts = [
  {
    key: "email",
    icon: FiMail,
    label: "Email",
    value: "valenisaaf@gmail.com", // Replace with your email
    href: "mailto:valenisaaf@gmail.com",
    color: "#2696ce",
    bg: "rgba(38,150,206,0.08)",
  },
  {
    key: "github",
    icon: FiGithub,
    label: "GitHub",
    value: "ValenisaaFalaq",
    href: "https://github.com/ValenisaaFalaq", // Replace with your GitHub
    color: "#1f2937",
    bg: "rgba(31,41,55,0.06)",
  },
  {
    key: "linkedin",
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Valenisaa Falaq",
    href: "https://www.linkedin.com/in/valenisaa-falaq", // Replace with your LinkedIn
    color: "#0077b5",
    bg: "rgba(0,119,181,0.08)",
  },
  {
    key: "instagram",
    icon: FiInstagram,
    label: "Instagram",
    value: "@valenisaa_",
    href: "https://instagram.com/valenisaa_", // Replace with your Instagram
    color: "#e1306c",
    bg: "rgba(225,48,108,0.08)",
  },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section section-cream">
      <div className="contact-container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">{t("contact.subtitle")}</p>
          <h2 className="section-title">{t("contact.title")}</h2>
        </div>

        {/* Intro card */}
        <div className="contact-intro" data-aos="fade-up" data-aos-delay="60">
          <div className="contact-intro-content">
            {/* <span className="contact-intro-emoji"></span> */}
            <div>
              <h3 className="contact-intro-title">Let's connect!</h3>
              <p className="contact-intro-text">
                Whether you have a question, a project idea, or just want to say
                hello, my inbox is always open. I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="contact-grid">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={c.key}
                href={c.href}
                target={c.key !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-card card-modern"
                data-aos="fade-up"
                data-aos-delay={i * 70}
                style={{ "--contact-color": c.color, "--contact-bg": c.bg }}
              >
                <div className="contact-icon-wrap">
                  <Icon size={22} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </div>
                <div className="contact-arrow">→</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
