import React from "react";
import "../styles/experience.css";
import { experiences } from "../data/experience";
import { motion } from "framer-motion"; // import framer-motion

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="exp-list">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="exp-card"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="exp-inner">
              {/* FRONT SIDE */}
              <div className="exp-front">
                <img src={exp.img} alt={exp.company} className="exp-img" />
                <h3>{exp.company}</h3>
              </div>
              {/* BACK SIDE */}
              <div className="exp-back">
                <h3>{exp.role}</h3>
                <h4>{exp.year}</h4>
                <p className="desc">
                  <i>{exp.desc}</i>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
