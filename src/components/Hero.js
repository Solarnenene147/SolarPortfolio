import React from "react";
import "../styles/hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi there! I'm <span className="highlight">Minh Phuoc</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Front-End Developer • UI/UX Lover • Creative Thinker
      </motion.p>
    </section>
  );
};

export default Hero;
