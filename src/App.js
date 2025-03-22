import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BubblePage from "./nestedBubbles/NestedTestBubble";
import AboutPage from "./AboutPage";
import { Farm } from "./farm";
import "./App.css";
import Vision from "./WebOfVisions";
import Coconspirators from "./Coconspirators";
import { MindMapPage } from "./NetworkedVisions/MindMapPage";
import ProjectCard from "./AboutThisPage";
import { data } from "./NetworkedVisions/data";

// todo:
// add more content to data structure
// think about shape of data structure
// massage bubbles to present well
// make fallback page link dynamic
// make form for content submission
// ensure pages look good on mobile
//
//

const navLinkStyle = {
  textDecoration: "none", // Removes underline
  color: "blue", // Text color
  fontWeight: "bold", // Makes text bold
  textTransform: "uppercase", // Capitalizes text
  fontFamily: "'Windsor', sans-serif",
};

function App() {
  return (
    <BrowserRouter>
      <header
        style={{
          padding: "1rem",
          borderBottom: "1px solid #ccc",
          fontFamily: "'Windsor', sans-serif",
          fontWeight: "bold",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {" "}
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Link
            to="/"
            style={{
              position: "absolute",
              left: "2rem",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              color: "black",
            }}
          >
            🏠
          </Link>
          {/* <Link to="/" style={navLinkStyle}>
            Bubble
          </Link>
          <Link to="/farmToForm" style={navLinkStyle}>
            Farm
          </Link> */}
          <Link to="/vision" style={navLinkStyle}>
            Vision
          </Link>
          <Link to="/Coconspirators" style={navLinkStyle}>
            Coconspirators
          </Link>
          <Link to="/visionMap" style={navLinkStyle}>
            MindMapNetwork
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<BubblePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/farmToForm" element={<Farm />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/Coconspirators" element={<Coconspirators />} />
        <Route path="/visionMap" element={<MindMapPage />} />
        <Route
          path="/aboutThisSite"
          element={<ProjectCard project={data["friendsToForm"]} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
