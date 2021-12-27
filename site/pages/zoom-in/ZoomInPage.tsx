import React from "react";
import { usePageTitleAnimation } from "../../hooks";
import { ZoomInTransition } from "../../../transitions";
import {
  AnimateButton,
  AnimatedPageTitle,
  FullPageCenter,
  TextCenter,
} from "../../components";

const ZoomInPage = () => {
  const { register, toggle } = usePageTitleAnimation();
  return (
    <FullPageCenter>
      <div>
        <ZoomInTransition {...register} from={0} to={1}>
          <AnimatedPageTitle>Zoom In</AnimatedPageTitle>
        </ZoomInTransition>
        <TextCenter>
          <AnimateButton onClick={toggle} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { ZoomInPage };
