import React from "react";

const Vision = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "'Helvetica Neue', sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Our Vision</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        We believe in a future shaped by{" "}
        <strong>collaborative proactive symbiosis</strong> — a dynamic ecosystem
        where people, systems, and ideas evolve together with intention. This
        approach isn’t just about working together; it’s about anticipating
        needs, nurturing mutual growth, and creating solutions that benefit all
        participants in the system. In this vision, cooperation becomes the
        foundation for resilience, innovation, and sustainable progress.
      </p>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" // feel free to swap this image!
        alt="Collaborative ecosystem"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
};

export default Vision;
