import React, { useState, useEffect, useRef } from "react";

export const Bubble = ({ primaryContent, bubbles = [] }) => {
  const [showSubBubbles, setShowSubBubbles] = useState(false);
  const [fade, setFade] = useState(false);
  const subBubblesRef = useRef(null);

  const bubbleStyle = {
    display: "inline-block",
    border: "1px solid black",
    borderRadius: "50%",
    padding: "20px 30px",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "18px",
    transition: "opacity 0.3s ease",
    opacity: fade ? 0 : 1,
  };

  const handlePrimaryClick = () => {
    // Fade out the primary bubble.
    setFade(true);
    setTimeout(() => {
      // Switch to sub‑bubbles (start them invisible).
      setShowSubBubbles(true);
      setFade(true);
      // Trigger fade‑in after a short delay.
      setTimeout(() => {
        setFade(false);
      }, 50);
    }, 300);
  };

  const closeSubBubbles = () => {
    // Fade out the sub‑bubbles.
    setFade(true);
    setTimeout(() => {
      // Switch back to the primary bubble (starting it invisible).
      setShowSubBubbles(false);
      setFade(true);
      // Trigger fade‑in after a short delay.
      setTimeout(() => {
        setFade(false);
      }, 50);
    }, 300);
  };

  // Listen for clicks on the document.
  const handleDocumentClick = (event) => {
    if (
      subBubblesRef.current &&
      !subBubblesRef.current.contains(event.target)
    ) {
      closeSubBubbles();
    }
  };

  useEffect(() => {
    if (showSubBubbles) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showSubBubbles]);

  // Returns position styles for sub-bubbles arranged evenly in a circle.
  const getBubblePosition = (index, total) => {
    const angle = (360 / total) * index - 90; // start at top
    const angleInRadians = (angle * Math.PI) / 180;
    const radius = 80; // Radius of the circle in pixels
    return {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: `translate(-50%, -50%) translate(${
        radius * Math.cos(angleInRadians)
      }px, ${radius * Math.sin(angleInRadians)}px)`,
    };
  };

  return (
    <div>
      {!showSubBubbles && (
        <div style={bubbleStyle} onClick={handlePrimaryClick}>
          {primaryContent}
        </div>
      )}
      {showSubBubbles && (
        <div
          ref={subBubblesRef}
          style={{
            position: "relative",
            width: "200px",
            height: "200px",
            margin: "0 auto",
          }}
        >
          {bubbles.map((bubbleContent, index) => (
            <div
              key={index}
              style={{
                ...bubbleStyle,
                ...getBubblePosition(index, bubbles.length),
              }}
            >
              {bubbleContent}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
