import React from "react";
import { useToggle } from "../../hooks";
import { FadeInTransition } from "../../../transitions";
import { AnimateButton, PageTitle } from "../../components";

const FadeInExample = () => {
  const [show, toggle] = useToggle(false);
  return (
    <div>
      <PageTitle>Fade in</PageTitle>
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
