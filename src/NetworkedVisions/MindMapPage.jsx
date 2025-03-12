import React, { useState } from "react";
import { data } from "./data";
import MindmapWithHistory from "./MindMap";
import { DataKeysSelector } from "./DataList";

export const MindMapPage = () => {
  const [initial, setInitial] = useState("farmtoform");
  console.log({ initial });
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <DataKeysSelector
        dataKeys={Object.keys(data)}
        selectedKey={initial}
        onChange={setInitial}
      />
      <MindmapWithHistory key={initial} data={data} initialFocus={initial} />
    </div>
  );
};
