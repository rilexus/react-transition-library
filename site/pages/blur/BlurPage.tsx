import React from "react";
import { BlurTransition } from "../../../transitions";
import { usePageTitleAnimation } from "../../hooks";
import {
  AnimateButton,
  AnimatedPageTitle,
  FullPageCenter,
  TextCenter,
} from "../../components";

const BlurPage = () => {
  const { register, toggle } = usePageTitleAnimation();
  return (
    <FullPageCenter>
      <div>
        <BlurTransition {...register} from={"0px"} to={"10px"}>
          <AnimatedPageTitle>Blur</AnimatedPageTitle>
        </BlurTransition>
        <TextCenter>
          <AnimateButton onClick={toggle} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { BlurPage };
