import React, { useState } from "react";

export const Bubble = ({ primaryContent, bubble1, bubble2, bubble3 }) => {
  const [showSubBubbles, setShowSubBubbles] = useState(false);
  const [fade, setFade] = useState(false);

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
    // Fade out the primary bubble
    setFade(true);
    setTimeout(() => {
      // Switch to sub‑bubbles (start them invisible)
      setShowSubBubbles(true);
      setFade(true);
      // Trigger fade‑in after a short delay
      setTimeout(() => {
        setFade(false);
      }, 50);
    }, 300);
  };

  const handleSubBubbleClick = () => {
    // Fade out the sub‑bubbles
    setFade(true);
    setTimeout(() => {
      // Switch back to the primary bubble (starting it invisible)
      setShowSubBubbles(false);
      setFade(true);
      // Trigger fade‑in after a short delay
      setTimeout(() => {
        setFade(false);
      }, 50);
    }, 300);
  };

  // Returns position styles for the sub-bubbles arranged in a circle.
  const getBubblePosition = (index) => {
    // Define angles for each bubble (in degrees)
    // Starting with the top (-90°), then 30° and 150° for a circle of three items.
    const angles = [-90, 30, 150];
    const angleInRadians = (angles[index] * Math.PI) / 180;
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
          style={{
            position: "relative",
            width: "200px",
            height: "200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{ ...bubbleStyle, ...getBubblePosition(0) }}
            // onClick={handleSubBubbleClick}
          >
            {bubble1}
          </div>
          <div
            style={{ ...bubbleStyle, ...getBubblePosition(1) }}
            // onClick={handleSubBubbleClick}
          >
            {bubble2}
          </div>
          <div
            style={{ ...bubbleStyle, ...getBubblePosition(2) }}
            // onClick={handleSubBubbleClick}
          >
            {bubble3}
          </div>
        </div>
      )}
    </div>
  );
};
