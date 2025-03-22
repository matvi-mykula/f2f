import React, { useState, useEffect } from "react";
import { BaseDataItem, DataMap } from "./data";

interface ConceptNodeProps {
  concept: BaseDataItem;
  onClick?: () => void; // Mark as optional
  style?: React.CSSProperties;
  isCentral?: boolean;
}

// A presentational component for each concept node.
const ConceptNode = ({
  concept,
  onClick = undefined,
  style,
  isCentral,
}: ConceptNodeProps) => {
  const nodeStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "50%", // default shape (circle)
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
      {concept?.pageUrl && (
        <a
          href={concept.pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginLeft: 8,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: "#007ACC",
            color: "#fff",
            textDecoration: "none",
          }}
          title="Visit page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6.354 5.5H5a.5.5 0 0 0 0 1h3.793L4.146 11.146a.5.5 0 1 0 .708.708L9.5 7.207V11a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.354z" />
          </svg>
        </a>
      )}
      <p style={{ margin: "5px 0 0 0", fontSize: "0.9rem" }}>
        {concept?.summary}
        {isCentral && concept?.content}
      </p>
    </div>
  );
};

// MindmapWithHistory renders the current (central) node,
// its peripheral nodes (from its tags), and the previous node.
const MindmapWithHistory = ({
  data,
  initialFocus,
}: {
  data: DataMap;
  initialFocus: string;
}) => {
  // History state stores the focused concept keys.
  const [historyState, setHistoryState] = useState([initialFocus]);
  const [visible, setVisible] = useState(false);

  // The current focus is the last item in the history.
  const currentFocus = historyState[historyState.length - 1];
  const focusedConcept = data[currentFocus];
  // Peripheral nodes come from the focused concept's tags.
  const peripheralKeys = focusedConcept.tags || [];

  // Previous node (if exists) is the penultimate item.
  const prevFocus =
    historyState.length > 1 ? historyState[historyState.length - 2] : null;
  const prevConcept = prevFocus ? data[prevFocus] : null;

  // When the current focus changes (or on mount), trigger fade-in.
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500);
  }, [currentFocus]);

  // Container style.
  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: "90vh",
    height: "90vh",
    margin: "0 auto",
    border: "1px solid #eee",
    borderRadius: "10px",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  };

  // Central node style.
  const centralStyle: React.CSSProperties = {
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

  // Peripheral nodes arranged in a circle.
  const getPeripheralPosition = (
    index: number,
    total: number,
    radius = 200
  ): React.CSSProperties => {
    const angle = (360 / total) * index - 90; // start at top (-90°)
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

  // Style for the previous node (displayed to the left of center).
  const previousStyle: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "20%",
    transform: visible
      ? "translate(-50%, -50%) scale(0.8)"
      : "translate(-50%, -50%) scale(0.7)",
    zIndex: 1,
    opacity: visible ? 1 : 0,
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };

  // Handle focus change: fade out, update history, then fade in.
  const handleFocusChange = (key: string) => {
    if (key === currentFocus) return;
    setVisible(false);
    setTimeout(() => {
      setHistoryState([...historyState, key]);
      setVisible(true);
    }, 500);
  };

  // "Back" button handler (if desired).
  const handleBack = () => {
    if (historyState.length <= 1) return;
    setVisible(false);
    setTimeout(() => {
      setHistoryState(historyState.slice(0, historyState.length - 1));
      setVisible(true);
    }, 500);
  };

  return (
    <div style={containerStyle}>
      {/* Previous Node (if exists) */}
      {prevConcept && (
        <ConceptNode
          key={prevFocus}
          concept={prevConcept}
          onClick={handleBack}
          style={{ ...previousStyle, backgroundColor: "lightpink" }}
        />
      )}
      {/* Central Node */}
      <ConceptNode
        key={currentFocus}
        concept={focusedConcept}
        isCentral={true}
        style={centralStyle}
      />
      {/* Peripheral Nodes from current focus's tags */}
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

export default MindmapWithHistory;
