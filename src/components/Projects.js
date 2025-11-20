import React, { useState, useRef, useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const currentData = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const categories = ["All", "Web", "App", "Design"];

  const handleFilter = (cat) => {
    setFilter(cat);
    setPage(1);
  };

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <h2>Projects</h2>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => handleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {currentData.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            visible={visible}
            index={i}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>

          <span>
            {page} / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
