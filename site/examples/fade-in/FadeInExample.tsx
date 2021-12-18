import React from "react";
import { useToggle } from "../../hooks";
import { FadeInTransition } from "../../../transitions";
import { AnimateButton } from "../../components";

const FadeInExample = () => {
  const [show, toggle] = useToggle(false);
  return (
    <div>
      <h2>Fade in</h2>
      <FadeInTransition in={show} from={0} to={1} timeout={400}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        consequatur cum deleniti, esse expedita hic id illum in incidunt magnam
        necessitatibus neque nulla obcaecati quaerat quidem repellendus, sed
        sequi voluptas.
      </FadeInTransition>
      <AnimateButton onClick={toggle} />
    </div>
  );
};

export { FadeInExample };
