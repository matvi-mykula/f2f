import React, { useState } from "react";

export const CircleToSquare = ({ summary, details }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  const containerStyle = {
    width: expanded ? "200px" : "100px",
    height: expanded ? "200px" : "150px",
    backgroundColor: "#f0f0f0",
    borderRadius: expanded ? "20px" : "50%",
    transition: "all 0.5s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    cursor: "pointer",
    textAlign: "center",
  };

  return (
    <div style={containerStyle} onClick={handleClick}>
      {expanded ? details : summary}
    </div>
  );
};
