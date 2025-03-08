import React, { useState } from "react";

export const FarmToForm = () => {
  const [activeSection, setActiveSection] = useState(null);

  const showContent = (section) => {
    setActiveSection(section);
  };

  return (
    <div style={styles.body}>
      {/* Home Button */}
      <a href="/" style={styles.homeButton}>F2F</a>

      {/* Navigation */}
      <div style={styles.navContainer}>
        <span style={styles.navLink} onClick={() => showContent("about")}>About</span>
        <span style={styles.navLink} onClick={() => showContent("manifesto")}>Manifesto</span>
        <span style={styles.navLink} onClick={() => showContent("contact")}>Contact</span>
      </div>

      {/* Logo & Main Content */}
      {!activeSection && (
        <div style={styles.mainContent}>
          <div style={styles.logoContainer} className="logo-container">
            <div style={styles.logoText}>FARM TO FORM</div>
            <div style={styles.mindMap}></div>
          </div>
        </div>
      )}

      {/* Content Sections */}
      {activeSection === "about" && (
        <div style={styles.content} className="content">
          <h2>About</h2>
          <p>Farm to Form is an initiative to collaborate between craftspeople, alternative thinkers, optimists, friends, artists, etc. This website is a testing ground of integration.</p>
        </div>
      )}

      {activeSection === "manifesto" && (
        <div style={styles.content} className="content">
          <h2>Manifesto</h2>
        </div>
      )}

      {activeSection === "contact" && (
        <div style={styles.content} className="content">
          <h2>Contact</h2>
        </div>
      )}
    </div>
  );
};

// Styles using JavaScript
const styles = {
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#ffffff",
    textAlign: "center",
    position: "relative",
  },
  homeButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "50px",
    height: "50px",
    border: "2px solid black",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
    backgroundColor: "white",
    cursor: "pointer",
  },
  navContainer: {
    position: "absolute",
    top: "20px",
    left: "80px",
    display: "flex",
    gap: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "black",
    fontSize: "18px",
    cursor: "pointer",
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "300px",
    height: "300px",
    border: "2px solid black",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.5s ease-in-out",
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "bold",
    zIndex: 2,
    cursor: "pointer",
    position: "absolute",
    transition: "opacity 0.3s ease-in-out",
  },
  mindMap: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "url('/mnt/data/image.png') no-repeat center",
    backgroundSize: "cover",
    opacity: 0,
    transition: "opacity 0.5s ease-in-out",
  },
  content: {
    position: "absolute",
    top: "100px",
    background: "white",
    width: "80%",
    height: "70vh",
    border: "2px solid black",
    padding: "20px",
    textAlign: "left",
  },
};

