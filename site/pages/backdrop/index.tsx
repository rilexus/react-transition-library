import React from "react";
import { usePageTitleAnimation } from "../../hooks";
import { BackdropTransition } from "../../../transitions";
import {
  AnimateButton,
  AnimatedPageTitle,
  FullPageCenter,
  TextCenter,
} from "../../components";

const BackdropExample = () => {
  const { register, toggle } = usePageTitleAnimation();
  return (
    <FullPageCenter>
      <div>
        <div
          style={{
            position: "relative",
            padding: "3rem",
          }}
        >
          <BackdropTransition
            {...register}
            backgroundColor={"#00000003"}
            from={"0px"}
            to={"10px"}
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          />
          <div>
            <AnimatedPageTitle>Backdrop</AnimatedPageTitle>
          </div>
        </div>
        <TextCenter>
          <AnimateButton onClick={toggle} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { BackdropExample };
