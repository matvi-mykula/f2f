import React, { useState } from "react";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh
    setIsSubmitted(inputValue === "1234"); // Show the div only if input is "1234"
    setInputValue(""); // Clears the input field after submission
  };

  return (
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
      {isSubmitted && <div>anything</div>}
    </form>
  );
};
// Inline styles
const formStyle = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  outline: "none",
};

const buttonStyle = {
  padding: "10px 15px",
  fontSize: "16px",
  color: "#fff",
  backgroundColor: "blue",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default InputForm;
