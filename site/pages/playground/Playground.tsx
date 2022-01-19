import React from "react";
import { ZoomInTransition } from "../../../transitions";

const Playground = () => {
  return (
    <div
      style={{
        position: "relative",
        left: "30vw",
      }}
    >
      <div>
        <ZoomInTransition
          style={{
            display: "inline-block",
          }}
          from={1}
          to={1.5}
          timeout={400}
          transformOrigin={"center center"}
        >
          <button>Click</button>
        </ZoomInTransition>
      </div>
    </div>
  );
};

export { Playground };
