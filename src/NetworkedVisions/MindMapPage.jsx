import React, { useState } from "react";
import MindmapWithHistory from "./MindMap";
import { DataKeysSelector } from "./DataList";
import { data } from "./data";

export const MindMapPage = () => {
  const [initial, setInitial] = useState("farmtoform");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <DataKeysSelector
        dataKeys={Object.keys(data)}
        selectedKey={initial}
        onChange={setInitial}
      />
      <MindmapWithHistory key={initial} data={data} initialFocus={initial} />
    </div>
  );
};
