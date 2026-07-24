// src/components/Loader/Loader.jsx
import { motion } from "framer-motion";
import "./Loader.css";

export default function Loader() {
  return (
    <motion.div
      className="loader-wrapper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-content">
        {/* Animated logo / initials */}
        <motion.div
          className="loader-logo"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          VF
        </motion.div>

        {/* Animated name */}
        <motion.p
          className="loader-name"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Valenisaa Falaq
        </motion.p>

        {/* Loading bar */}
        <motion.div
          className="loader-bar-track"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="loader-bar-fill"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.7, duration: 1.3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Background floating blobs */}
      <div className="loader-blob loader-blob-1" />
      <div className="loader-blob loader-blob-2" />
    </motion.div>
  );
}
