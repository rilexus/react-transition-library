import React, { ForwardRefRenderFunction } from "react";
import { createEventTransition } from "../../../utils/createEventTransition";
import { ZoomInTransition } from "../../../transitions";

function createMouseEventTransition(
  render: ForwardRefRenderFunction<HTMLElement>
) {
  return createEventTransition("mouseup", render);
}

const MouseUpZoomInTransition = createMouseEventTransition(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  (props, ref) => {
    return (
      <ZoomInTransition {...props} ref={ref}>
        <button>Click</button>
      </ZoomInTransition>
    );
  }
);

const Playground = () => {
  return (
    <div
      style={{
        position: "relative",
        left: "30vw",
      }}
    >
      <div>
        <MouseUpZoomInTransition
          style={{
            display: "inline-block",
          }}
          from={1}
          to={1.5}
          timeout={400}
          transforOrigin={"center center"}
        />
      </div>
    </div>
  );
};

export { Playground };
