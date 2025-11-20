import "../styles/contact.css";
import { useEffect, useRef } from "react";
import mycv from "../pdf/MyCV.pdf";

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const icons = containerRef.current.querySelectorAll(".icon-btn");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    icons.forEach((icon) => observer.observe(icon));

    return () => {
      icons.forEach((icon) => observer.unobserve(icon));
    };
  }, []);

  return (
    <section className="contact" id="contact" ref={containerRef}>
      <h2>Contact Me</h2>

      <div className="contact-buttons">
        <a
          href="mailto:winnerhuynh1234@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
        >
          <i className="fas fa-envelope"></i>
        </a>

        <a
          href="https://www.facebook.com/hmf1407/"
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        <a
          href={mycv}
          rel="noreferrer"
          className="icon-btn"
          download="Huynh-Minh-Phuoc-CV.pdf"
        >
          <i className="fas fa-file-pdf"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
