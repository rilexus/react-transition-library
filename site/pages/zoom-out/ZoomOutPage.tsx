import React from "react";
import { usePageTitleAnimation } from "../../hooks";
import { ZoomOutTransition } from "../../../transitions";
import {
  AnimateButton,
  AnimatedPageTitle,
  FullPageCenter,
  TextCenter,
} from "../../components";

const ZoomOutPage = () => {
  const { register, toggle } = usePageTitleAnimation();

  return (
    <FullPageCenter>
      <div>
        <ZoomOutTransition {...register} from={1} to={0}>
          <AnimatedPageTitle>Zoom Out</AnimatedPageTitle>
        </ZoomOutTransition>
        <TextCenter>
          <AnimateButton onClick={toggle} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { ZoomOutPage };
