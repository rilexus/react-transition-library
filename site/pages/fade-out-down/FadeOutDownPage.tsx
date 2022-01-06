import React from "react";
import {
  AnimateButton,
  AnimatedPageTitle,
  FullPageCenter,
  TextCenter,
} from "../../components";
import { usePageTitleAnimation } from "../../hooks";
import { FadeOutDownTransition } from "../../../transitions/fade-out-down-transition";

const FadeOutDownPage = () => {
  const { register, toggle } = usePageTitleAnimation();

  return (
    <FullPageCenter>
      <div>
        <div
          style={{
            pointerEvents: "none",
          }}
        >
          <FadeOutDownTransition {...register} slideY={{ to: "30%" }}>
            <AnimatedPageTitle>Fade Out Down</AnimatedPageTitle>
          </FadeOutDownTransition>
        </div>
        <TextCenter>
          <AnimateButton onClick={toggle} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { FadeOutDownPage };
