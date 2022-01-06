import React from "react";
import { FadeOutTransition } from "../../../transitions";
import { usePageTitleAnimation } from "../../hooks";
import {
  AnimateButton,
  AnimatedPageTitle,
  FullPageCenter,
  TextCenter,
} from "../../components";

const FadeOutExample = () => {
  const { register, toggle } = usePageTitleAnimation();

  return (
    <FullPageCenter>
      <div>
        <FadeOutTransition {...register} from={1} to={0}>
          <AnimatedPageTitle>Fade Out</AnimatedPageTitle>
        </FadeOutTransition>
        <TextCenter>
          <AnimateButton onClick={toggle} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { FadeOutExample };
