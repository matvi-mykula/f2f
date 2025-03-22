import React from "react";

export const DataKeysSelector = ({ dataKeys, selectedKey, onChange }) => {
  return (
    <div style={{ position: "relative", width: "200px" }}>
      <select
        value={selectedKey}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 40px 10px 10px", // add right padding for arrow
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#fff",
          appearance: "none", // removes default browser styling
          WebkitAppearance: "none",
          MozAppearance: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {dataKeys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <span
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          fontSize: "12px",
          color: "#333",
        }}
      >
        &#9662;
      </span>
    </div>
  );
};
