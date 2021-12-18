import React from "react";
import { FadeOutTransition } from "../../../transitions";
import { useToggle } from "../../hooks";

const FadeOutExample = () => {
  const [show, toggle] = useToggle();
  return (
    <div>
      <h2>Fade out</h2>
      <FadeOutTransition from={1} to={0} timeout={400} in={show}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum eius
        nisi reiciendis veritatis. Architecto, aspernatur autem cupiditate
        dignissimos facere fugiat in minima minus molestias possimus, quod sed
        tempora temporibus?
      </FadeOutTransition>
      <button onClick={toggle}>animate</button>
    </div>
  );
};

export { FadeOutExample };
