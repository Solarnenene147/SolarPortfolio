import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import "../styles/navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // cuộn xuống → ẩn
      } else {
        setShow(true); // cuộn lên → hiện
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          className="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h2>Solar's Portfolio</h2>
          <ThemeSwitch />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
