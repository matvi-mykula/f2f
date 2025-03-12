import React, { useState } from "react";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh
    setIsSubmitted(true); // Show "ANYTHING" div on submit
    setInputValue(""); // Clears the input field after submission
  };

  // Full-page container style
  const pageStyle = {
    backgroundColor: "#f0f0f0", // Light gray background
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Windsor, sans-serif", // Windsor font
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    padding: "20px 0",
  };

  // Form styling (positioned at the top)
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  };

  // Input styling
  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  };

  // Button styling
  const buttonStyle = {
    padding: "10px 15px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "blue",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  // Styling for the "ANYTHING" div (centered in the middle)
  const anythingStyle = {
    flexGrow: 1, // Takes up available space to stay centered
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    flexDirection: "column",
  };

  return (
    <div style={pageStyle}>
      {/* Form at the top */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Password..."
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>

      {/* Centered "ANYTHING" div */}
      {isSubmitted && (
        <div style={anythingStyle}>
          <div>
            welcome... soon you will be able to submit information here and
            recieve some as well... we promise you will enjoy
          </div>
          <div>
            <a
              href="https://github.com/matvi-mykula/f2f"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputForm;
