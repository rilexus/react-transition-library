import React from "react";
import {
  AnimateButton,
  AnimatedPageTitle,
  FullPageCenter,
  ReadmeLink,
  TextCenter,
  VerticalDivider,
} from "../../components";
import { ScaleTransition } from "../../../transitions";
import { usePageTitleAnimation } from "../../hooks";

const ScalePage = () => {
  const { register, toggle } = usePageTitleAnimation();
  return (
    <FullPageCenter>
      <div>
        <div>
          <ScaleTransition {...register} from={0.9} to={1.4}>
            <AnimatedPageTitle>Scale</AnimatedPageTitle>
          </ScaleTransition>
        </div>
        <div>
          <TextCenter>
            <AnimateButton onClick={toggle} />
            <VerticalDivider />
            <div>
              <ReadmeLink link={"/scale-transition/README.md"} />
            </div>
          </TextCenter>
        </div>
      </div>
    </FullPageCenter>
  );
};

export { ScalePage };
