import React from "react";
import {
  AnimateButton,
  AnimatedPageTitle,
  FullPageCenter,
  ReadmeLink,
  TextCenter,
  VerticalDivider,
} from "../../components";
import { TranslateTransition } from "../../../transitions";
import { usePageTitleAnimation } from "../../hooks";

const TranslatePage = () => {
  const { register, toggle } = usePageTitleAnimation();

  return (
    <FullPageCenter>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <TranslateTransition
          {...register}
          from={["0rem", "0rem"]}
          to={["-3rem", "-3rem"]}
        >
          <AnimatedPageTitle>Translate</AnimatedPageTitle>
        </TranslateTransition>
        <TextCenter>
          <AnimateButton onClick={toggle} />
          <VerticalDivider />
          <ReadmeLink link={"/translate-transition/README.md"} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { TranslatePage };
