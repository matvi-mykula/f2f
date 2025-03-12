import React from "react";

// A controlled component to show data keys as a list of buttons.
// Props:
// - dataKeys: an array of keys to display
// - selectedKey: the currently selected key
// - onChange: callback to update the selection when a key is clicked
export const DataKeysSelector = ({ dataKeys, selectedKey, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "10px",
        padding: "10px",
        width: "10px",
      }}
    >
      {dataKeys.map((key) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          style={{
            padding: "8px 16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: key === selectedKey ? "#007ACC" : "#f0f0f0",
            color: key === selectedKey ? "#fff" : "#333",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
