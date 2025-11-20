import React from "react";
import "../styles/about.css";
import { motion } from "framer-motion";
import profileImg from "../assets/profile_img.jpg";

// Danh sách thông tin cá nhân
const personalInfo = [
  { id: 1, label: "Full Name", value: "Huynh Minh Phuoc", icon: "👤" },
  { id: 2, label: "Date of Birth", value: "14/07/2004", icon: "🎂" },
  { id: 3, label: "Location", value: "TP.HCM, Vietnam", icon: "📍" },
  { id: 4, label: "Zodiac Sign", value: "Cancer", icon: "♋" },
  {
    id: 5,
    label: "Personality",
    value: "Creative, Curious, Detail-oriented, Enthusiastic",
    icon: "✨",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="about">
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>About Me</h2>
      <div className="about-container">
        <div className="about-left">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
        <div className="about-right">
          <div className="info-cards">
            {personalInfo.map((item, index) => (
              <motion.div
                key={item.id}
                className="info-card"
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="info-icon">{item.icon}</span>
                <div>
                  <p className="info-label">{item.label}</p>
                  <p className="info-value">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
