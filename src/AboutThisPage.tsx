import React from "react";
import { BaseDataItem } from "./NetworkedVisions/data";

/// not sure if I want all these to be extensible or custom made or generalized....
// maybe I can use something like this as a fallback and we can make custom pages if we

const ProjectCard = ({ project }: { project: BaseDataItem }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "600px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "16px auto",
      }}
    >
      <h2 style={{ marginBottom: "8px" }}>{project.name}</h2>
      <p style={{ fontStyle: "italic", color: "#666", marginBottom: "12px" }}>
        {project.summary}
      </p>
      {project.blurb && <p style={{ marginBottom: "12px" }}>{project.blurb}</p>}
      <div style={{ marginBottom: "12px" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              padding: "4px 8px",
              marginRight: "8px",
              fontSize: "12px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      {project?.links && project?.links.length > 0 && (
        <a
          href={project?.links[0]}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "8px",
            textDecoration: "none",
            color: "#007ACC",
            fontWeight: 500,
          }}
        >
          GITHUB
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
