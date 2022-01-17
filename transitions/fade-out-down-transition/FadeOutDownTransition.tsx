import { TransitionProps } from "../transition/TransitionProps.type";
import React, { FC, forwardRef, ForwardRefExoticComponent } from "react";
import { FadeOutTransition } from "../fade-out-transition";
import { SlideYTransition } from "../slide-y-transition";

type DefaultFadeOutProps = { timeout?: number; from?: number; to?: number };
type DefaultSlideYProps = { timeout?: number; from?: string; to?: string };

type FadeOutDownTransitionProps = TransitionProps & {
  fadeOut?: DefaultFadeOutProps;
  slideY?: DefaultSlideYProps;
};

const defaultFadeOutProps: DefaultFadeOutProps = {
  timeout: 700,
  from: 1,
  to: 0,
};
const defaultSlideYProps: DefaultSlideYProps = {
  timeout: 700,
  from: "0%",
  to: "100%",
};
const FadeOutDownTransition: ForwardRefExoticComponent<FadeOutDownTransitionProps> =
  forwardRef<HTMLElement, FadeOutDownTransitionProps>(
    (
      {
        children,
        fadeOut = defaultFadeOutProps,
        slideY = defaultSlideYProps,
        ...props
      },
      outsideRef
    ) => {
      return (
        <FadeOutTransition
          {...props}
          ref={outsideRef}
          timeout={700}
          from={1}
          to={0}
          {...fadeOut}
        >
          <SlideYTransition
            {...props}
            from={"0%"}
            to={"100%"}
            timeout={700}
            {...slideY}
          >
            {children}
          </SlideYTransition>
        </FadeOutTransition>
      );
    }
  );
FadeOutDownTransition.displayName = "FadeOutDownTransition";

export { FadeOutDownTransition };
