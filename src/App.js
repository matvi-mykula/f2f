import logo from "./logo.svg";
import "./App.css";
import { Bubble } from "./ExpandingBubble";

function App() {
  return (
    <div
      style={{
        height: "100vh", // Set the height of the entire app to 100% of the viewport height
        display: "flex", // Use flexbox to center content
        justifyContent: "center", // Horizontally center the content
        alignItems: "center", // Vertically center the content
        flexDirection: "column", // Stack elements vertically
        textAlign: "center", // Center the text inside the bubbles
      }}
    >
      <header style={{ width: "100%" }}>HEADER</header>

      {/* main content */}
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center", // Horizontally center the bubble
          alignItems: "center", // Vertically center the bubble
          flexDirection: "column", // Stack elements vertically
        }}
      >
        <Bubble
          primaryContent={"Some Central Theme"}
          bubble1={
            <Bubble
              primaryContent={"woah"}
              bubble1={"are"}
              bubble2={"we"}
              bubble3={"meta"}
            />
          }
          bubble2={"a related place"}
          bubble3={"a related person"}
        />
      </div>
    </div>
  );
}

export default App;
