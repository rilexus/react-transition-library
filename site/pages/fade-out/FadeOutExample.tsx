import React from "react";
import { FadeOutTransition } from "../../../transitions";
import { useToggle } from "../../hooks";
import { PageTitle } from "../../components";

const FadeOutExample = () => {
  const [show, toggle] = useToggle();
  return (
    <div>
      <PageTitle>Fade out</PageTitle>
      <FadeOutTransition from={1} to={0} timeout={400} in={show}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum
          eius nisi reiciendis veritatis. Architecto, aspernatur autem
          cupiditate dignissimos facere fugiat in minima minus molestias
          possimus, quod sed tempora temporibus?
        </p>
      </FadeOutTransition>
      <button onClick={toggle}>animate</button>
    </div>
  );
};

export { FadeOutExample };
