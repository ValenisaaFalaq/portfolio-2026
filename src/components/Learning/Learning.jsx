// src/components/Learning/Learning.jsx
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiGlobe,
  FiDatabase,
  FiMonitor,
  FiTerminal,
  FiBookOpen,
} from "react-icons/fi";
import { learningItems } from "../../data/learning";
import "./Learning.css";

const statusConfig = {
  in_progress: {
    label: "In Progress",
    color: "#2696ce",
    bg: "rgba(38,150,206,0.1)",
  },
  exploring: {
    label: "Exploring",
    color: "#4caf7d",
    bg: "rgba(76,175,125,0.1)",
  },
  next_up: {
    label: "Next Up",
    color: "var(--color-accent-dark)",
    bg: "rgba(224,166,130,0.15)",
  },
};

// Helper function to render icons dynamically based on topic name
const renderIcon = (topic) => {
  const t = (topic || "").toLowerCase();
  if (
    t.includes("ai") ||
    t.includes("machine") ||
    t.includes("deep") ||
    t.includes("rag")
  )
    return <FiCpu size={24} />;
  if (t.includes("data") || t.includes("sql") || t.includes("python"))
    return <FiDatabase size={24} />;
  if (t.includes("web") || t.includes("react") || t.includes("php"))
    return <FiMonitor size={24} />;
  if (
    t.includes("japan") ||
    t.includes("jlpt") ||
    t.includes("english") ||
    t.includes("language")
  )
    return <FiGlobe size={24} />;
  return <FiTerminal size={24} />;
};

export default function Learning() {
  const { t } = useTranslation();

  return (
    <section id="learning" className="section section-alt">
      <div className="learn-container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">{t("learning.subtitle")}</p>
          <h2 className="section-title">{t("learning.title")}</h2>
        </div>

        <div className="learn-grid">
          {learningItems.map((item, i) => {
            const status = statusConfig[item.status];
            return (
              <motion.div
                key={item.id}
                className="learn-card card-modern"
                data-aos="fade-up"
                data-aos-delay={i * 70}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Top row */}
                <div className="learn-card-top">
                  <div
                    className="learn-icon text-gray-700"
                    style={{
                      background: `${item.color}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px",
                      borderRadius: "8px",
                    }}
                  >
                    {renderIcon(item.topic)}
                  </div>
                  <span
                    className="learn-status"
                    style={{ color: status.color, background: status.bg }}
                  >
                    {status.label}
                  </span>
                </div>

                {/* Topic */}
                <h3 className="learn-topic">{item.topic}</h3>
                <p className="learn-desc">{item.description}</p>

                {/* Progress */}
                <div className="learn-progress">
                  <div className="learn-prog-label">
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      Progress
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: item.color,
                      }}
                    >
                      {item.progress}%
                    </span>
                  </div>
                  <div className="learn-prog-track">
                    <motion.div
                      className="learn-prog-fill"
                      style={{ background: item.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Growth mindset note */}
        <div className="learn-note" data-aos="fade-up">
          <span className="learn-note-icon">
            <FiBookOpen size={24} style={{ color: "var(--color-primary)" }} />
          </span>
          <p>
            As an Informatics Engineering student, I believe technology and data
            are powerful tools to solve real-world problems. Currently, I am
            actively deepening my expertise in AI and Data Engineering, while
            also exploring web development and language skills
          </p>
        </div>
      </div>
    </section>
  );
}
