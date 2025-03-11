import React from "react";

const AboutPage = () => {
  // Page container styles
  const pageStyle = {
    backgroundColor: "#ffccdd", // Light pink background
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Border container styles
  const borderStyle = {
    width: "95%",
    height: "95%",
    border: "0.5in solid green", // 1/2 inch border
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Blue square styles (for patterned effect on top of the border)
  const blueSquareStyle = {
    width: "20px",
    height: "20px",
    backgroundColor: "blue",
    position: "absolute",
  };

  // Centered content styles
  const contentStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  // Generate blue squares on top of the green border
  const squares = [];
  const numSquares = 10; // Number of squares per side
  const offset = "-12px"; // Move squares up to sit on top of the border

  for (let i = 0; i < numSquares; i++) {
    const position = `calc(${i * 10}% + 2%)`; // Spacing for squares along the edges

    squares.push(
      // Top row (on top of the green border)
      <div
        key={`top-${i}`}
        style={{ ...blueSquareStyle, top: offset, left: position }}
      />,
      // Bottom row (on top of the green border)
      <div
        key={`bottom-${i}`}
        style={{ ...blueSquareStyle, bottom: offset, left: position }}
      />,
      // Left column (on top of the green border)
      <div
        key={`left-${i}`}
        style={{ ...blueSquareStyle, left: offset, top: position }}
      />,
      // Right column (on top of the green border)
      <div
        key={`right-${i}`}
        style={{ ...blueSquareStyle, right: offset, top: position }}
      />
    );
  }

  return (
    <div style={pageStyle}>
      <div style={borderStyle}>
        {squares} {/* Render blue squares on top of the border */}
        <div style={contentStyle}>
          <h1>About Page</h1>
          <p>
            welcome to the about page... here we are experimenting with the
            sauce.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
