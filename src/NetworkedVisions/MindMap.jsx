import React, { useState, useEffect } from "react";

// A presentational component for each concept node.
const ConceptNode = ({ concept, onClick, style, isCentral }) => {
  const nodeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "50%", // circle by default
    padding: isCentral ? "20px" : "10px",
    width: isCentral ? "150px" : "120px",
    height: isCentral ? "150px" : "120px",
    cursor: onClick ? "pointer" : "default",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    transition: "transform 0.5s ease, opacity 0.5s ease",
    ...style,
  };

  return (
    <div style={nodeStyle} onClick={onClick}>
      <strong>{concept.name}</strong>
      <p style={{ margin: "5px 0 0 0", fontSize: "0.9rem" }}>
        {concept.summary}
      </p>
    </div>
  );
};

// The Mindmap component manages the current focus and cycles through the data.
const Mindmap = ({ data, initialFocus }) => {
  // Set initial focus to the provided key or the first key in data.
  const [currentFocus, setCurrentFocus] = useState(
    initialFocus || Object.keys(data)[0]
  );
  // "visible" state controls the fade transitions.
  const [visible, setVisible] = useState(false);

  const focusedConcept = data[currentFocus];
  // Peripheral keys come from the focused concept's tags.
  const peripheralKeys = focusedConcept.tags || [];

  // When the component mounts, trigger the fade in.
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500);
  }, []);

  // Container style with a fade transition.
  const containerStyle = {
    position: "relative",
    width: "90vh",
    height: "90vh",
    margin: "0 auto",
    border: "1px solid #eee",
    borderRadius: "10px",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  };

  // Style for the central node (always centered).
  const centralStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: visible
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0.9)",
    zIndex: 2,
    opacity: visible ? 1 : 0,
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };

  // Function to handle focus change with a fade out then fade in.
  const handleFocusChange = (key) => {
    if (key === currentFocus) return;
    // Fade out current central node (and peripheral nodes)
    setVisible(false);
    // After fade out, change focus and fade back in.
    setTimeout(() => {
      setCurrentFocus(key);
      setVisible(true);
    }, 500);
  };

  // Compute peripheral node positions arranged in a circle.
  const getPeripheralPosition = (index, total, radius = 200) => {
    const angle = (360 / total) * index - 90; // start at top (−90°)
    const angleRad = (angle * Math.PI) / 180;
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);
    return {
      position: "absolute",
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transition: "transform 0.5s ease, opacity 0.5s ease",
      opacity: visible ? 1 : 0,
    };
  };

  return (
    <div style={containerStyle}>
      {/* Central Node */}
      <ConceptNode
        concept={focusedConcept}
        isCentral={true}
        style={centralStyle}
      />

      {/* Peripheral Nodes */}
      {peripheralKeys.map((key, index) => {
        const concept = data[key];
        if (!concept) return null;
        return (
          <ConceptNode
            key={key}
            concept={concept}
            onClick={() => handleFocusChange(key)}
            style={getPeripheralPosition(index, peripheralKeys.length)}
          />
        );
      })}
    </div>
  );
};

export default Mindmap;
