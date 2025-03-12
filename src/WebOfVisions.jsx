import React from "react";

const Vision = () => {
  // Page container styles
  const pageStyle = {
    backgroundColor: "#add8e6", // Light blue ocean background
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  // Goal list styles
  const listStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    textAlign: "left",
  };

  // Fun undersea character styles
  const characterStyle = {
    position: "absolute",
    width: "100px",
  };

  const characters = [
    { src: "/fish.png", top: "10%", left: "5%" },
    { src: "/turtle.png", top: "70%", left: "80%" },
    { src: "/jellyfish.png", top: "50%", left: "20%" },
    { src: "/octopus.png", top: "80%", left: "5%" },
    { src: "/seahorse.png", top: "15%", left: "85%" },
  ];

  return (
    <div style={pageStyle}>
      <h1>Vision for the Website</h1>
      <div style={listStyle}>
        <h2>Goals</h2>
        <ul>
          <li>Mapping & Connecting Material Flows</li>
          <li>Information Flows</li>
          <li>Governance</li>
          <li>Ideation</li>
          <li>Collaboration</li>
          <li>Envisioning</li>
        </ul>
      </div>
      {/* Render undersea characters */}
      {characters.map((char, index) => (
        <img
          key={index}
          src={char.src}
          alt="Undersea character"
          style={{ ...characterStyle, top: char.top, left: char.left }}
        />
      ))}
    </div>
  );
};

export default Vision;
