import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BubblePage from "./nestedBubbles/NestedTestBubble";
import AboutPage from "./AboutPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Link to="/">Bubble</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<BubblePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
