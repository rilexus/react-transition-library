import React from "react";
import { usePageTitleAnimation } from "../../hooks";
import {
  AnimateButton,
  FullPageCenter,
  PageTitle,
  TextCenter,
} from "../../components";
import { SlideYTransition } from "../../../transitions";

const SlideYPage = () => {
  const { register, toggle } = usePageTitleAnimation();

  return (
    <FullPageCenter>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            overflowY: "hidden",
          }}
        >
          <SlideYTransition
            from={"100%"}
            to={"0%"}
            style={{
              pointerEvents: "none",
            }}
            {...register}
            appear
          >
            <PageTitle>Slide Y</PageTitle>
          </SlideYTransition>
        </div>
        <TextCenter>
          <AnimateButton onClick={toggle} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { SlideYPage };
