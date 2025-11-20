import React, { useRef, useEffect, useState } from "react";
import "../styles/skills.css";
import { skills } from "../data/skills";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <h2>Skills</h2>

      <div className="skill-grid">
        {skills.map((skill, i) => (
          <div
            key={skill.id}
            className={`skill-item ${visible ? "show" : ""}`}
            style={{
              transitionDelay: visible ? `${i * 0.1}s` : "0s",
            }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
