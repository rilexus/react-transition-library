import React from "react";
import { usePageTitleAnimation } from "../../hooks";
import { FadeInTransition } from "../../../transitions";
import {
  AnimateButton,
  FullPageCenter,
  PageTitle,
  TextCenter,
} from "../../components";

const FadeInExample = () => {
  const { register, toggle } = usePageTitleAnimation();
  return (
    <FullPageCenter>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <FadeInTransition from={0} to={1} {...register}>
          <PageTitle>Fade In</PageTitle>
        </FadeInTransition>
        <TextCenter>
          <AnimateButton onClick={toggle} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { FadeInExample };
