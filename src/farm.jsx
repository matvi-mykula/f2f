import react from "react";
import "./farm.css";

export const Farm = () => {
  function showContent(section) {
    document.querySelector(".main-content").style.display = "none";
    document
      .querySelectorAll(".content")
      .forEach((div) => div.classList.remove("active"));
    document.getElementById(section).classList.add("active");
  }
  return (
    <div style={{ marginTop: "20%" }}>
      <a href="index.html" class="home-button">
        F2F
      </a>
      <div class="nav-container">
        <a onclick={() => showContent("about")}>About</a>
        <a onclick={() => showContent("manifesto")}>Manifesto</a>
        <a onclick="showContent('contact')">Contact</a>
      </div>

      <div class="main-content">
        <div class="logo-container">
          <div class="logo-text">FARM TO FORM</div>
          <div class="mind-map"></div>
        </div>
      </div>

      <div id="about" class="content">
        <h2>About</h2>
        <p>
          Farm to Form is an initiative to collaborate between craftspeople,
          alternative thinkers, optimists, friends, artists, etc. This website
          is a testing ground of integration.
        </p>
      </div>
      <div id="manifesto" class="content">
        {" "}
        <h2>Manifesto</h2>{" "}
      </div>
      <div id="contact" class="content">
        {" "}
        <h2>Contact</h2>{" "}
      </div>
    </div>
  );
};
