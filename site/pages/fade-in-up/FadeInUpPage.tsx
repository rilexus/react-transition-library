import React from "react";
import {
  AnimateButton,
  FullPageCenter,
  PageTitle,
  TextCenter,
} from "../../components";
import { usePageTitleAnimation } from "../../hooks";
import { FadeInUpTransition } from "../../../transitions/fade-in-up-transition";

const FadeInUpPage = () => {
  const { register, toggle } = usePageTitleAnimation();
  return (
    <FullPageCenter>
      <div
        style={{
          position: "relative",
        }}
      >
        <FadeInUpTransition {...register} slideY={{ from: "30%" }}>
          <PageTitle>Fade In Up</PageTitle>
        </FadeInUpTransition>
        <TextCenter>
          <AnimateButton onClick={toggle} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { FadeInUpPage };
