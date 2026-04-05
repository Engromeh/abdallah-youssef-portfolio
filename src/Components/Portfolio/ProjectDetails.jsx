import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../Data/portfolioData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);

  const project = portfolioData.find((item) => item.id === parseInt(id));
  if (!project) return <div>Not Found</div>;

  return (
    <section className="min-h-screen py-20 px-6" style={{ background: "#F5F0E8", fontFamily: "'Tajawal', sans-serif" }}>
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-12 flex items-center gap-2 transition-colors duration-300"
          style={{ color: "#8C7B70", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer" }}
          onMouseEnter={e => e.currentTarget.style.color = "#C4956A"}
          onMouseLeave={e => e.currentTarget.style.color = "#8C7B70"}
        >
          ← رجوع
        </button>

        {/* Tag */}
        <span style={{
          display: "inline-block", padding: "0.3rem 1rem",
          background: "rgba(138,158,138,0.15)", color: "#5C7A5C",
          borderRadius: "100px", fontSize: "0.78rem",
          letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem"
        }}>
          {project.category}
        </span>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 300, fontStyle: "italic",
          color: "#6B5744", lineHeight: 1.1, marginBottom: "1rem"
        }}>
          {project.title}
        </h1>

        <p style={{ color: "#8C7B70", fontSize: "1rem", maxWidth: "520px", lineHeight: 1.8, marginBottom: "3rem" }}>
          {project.description}
        </p>

        {/* Hero Image */}
        <div style={{ borderRadius: "24px", overflow: "hidden", height: "480px", marginBottom: "2rem", cursor: "pointer" }}
          onClick={() => setModalImage(project.images[0])}>
          <img
            src={project.images[0]}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }}
            onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.target.style.transform = "scale(1)"}
          />
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2.5rem 0" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(196,149,106,0.25)" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4956A", opacity: 0.6 }} />
          <div style={{ flex: 1, height: "1px", background: "rgba(196,149,106,0.25)" }} />
        </div>

        {/* Gallery */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
          {project.images.map((img, index) => (
            <div key={index}
              style={{ borderRadius: "14px", overflow: "hidden", height: "240px", cursor: "pointer" }}
              onClick={() => setModalImage(img)}>
              <img
                src={img} alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(28,20,16,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 50, padding: "2rem", cursor: "pointer"
          }}
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={() => setModalImage(null)}
            style={{
              position: "fixed", top: "1.5rem", right: "1.5rem",
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(245,240,232,0.15)", border: "1px solid rgba(245,240,232,0.3)",
              color: "#F5F0E8", fontSize: "1.2rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}
          >✕</button>
          <img
            src={modalImage} alt=""
            style={{ maxHeight: "85vh", maxWidth: "90vw", borderRadius: "16px", objectFit: "contain", cursor: "default" }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;