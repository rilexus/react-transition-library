import React from "react";
import { useToggle } from "../../hooks";
import { BackdropTransition } from "../../../transitions";

const BackdropExample = () => {
  const [show, toggle] = useToggle(false);
  return (
    <div>
      <h2>Backdrop</h2>
      <div
        style={{
          width: "30vw",
          position: "relative",
        }}
      >
        <BackdropTransition
          timeout={400}
          from={"0px"}
          to={"10px"}
          in={show}
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            padding: "2rem",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          autem blanditiis eveniet illo ipsum laudantium necessitatibus nulla
          omnis praesentium qui. Aliquid aut corporis culpa cumque earum hic,
          laudantium sapiente voluptate!
        </div>
      </div>
      <div>
        <button onClick={toggle}>Animate</button>
      </div>
    </div>
  );
};

export { BackdropExample };
