import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BubblePage from "./nestedBubbles/NestedTestBubble";
import AboutPage from "./AboutPage";
import { Farm } from "./farm";
import "./App.css";
import Vision from "./WebOfVisions";
import Coconspirators from "./Coconspirators";
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
          <Link to="/about" style={navLinkStyle}>
            About
          </Link>
          <Link to="/" style={navLinkStyle}>
            Bubble
          </Link>
          <Link to="/farmToForm" style={navLinkStyle}>
            Farm
          </Link>
          <Link to="/vision" style={navLinkStyle}>
            Vision
          </Link>
          <Link to="/Coconspirators" style={navLinkStyle}>
            Coconspirators
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<BubblePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/farmToForm" element={<Farm />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/Coconspirators" element={<Coconspirators />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
