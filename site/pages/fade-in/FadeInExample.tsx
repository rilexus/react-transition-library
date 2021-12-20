import React from "react";
import { usePageTitleAnimation } from "../../hooks";
import { FadeInTransition } from "../../../transitions";
import { AnimateButton, FullPageCenter, PageTitle } from "../../components";

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
          <PageTitle>Fade in</PageTitle>
        </FadeInTransition>
        <AnimateButton onClick={toggle} />
      </div>
    </FullPageCenter>
  );
};

export { FadeInExample };
