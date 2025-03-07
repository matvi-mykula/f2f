import React from "react";
import { Bubble } from "./ExpandingBubble";

const BubblePage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Bubble
        primaryContent="Some Central Theme"
        bubbles={[
          <Bubble
            key="nested1"
            primaryContent="woah"
            bubbles={[
              <Bubble
                key="nested1-1"
                primaryContent="OOOOO"
                bubbles={["definitely"]}
              />,
              "-----",
              "-----",
            ]}
          />,
          "a related place",
          "a related person",
        ]}
      />
    </div>
  );
};

export default BubblePage;
