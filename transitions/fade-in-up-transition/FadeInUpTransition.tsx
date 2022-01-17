import React, { forwardRef, ForwardRefExoticComponent } from "react";
import { FadeInTransition } from "../fade-in-transition";
import { SlideYTransition } from "../slide-y-transition";
import { TransitionProps } from "../transition/TransitionProps.type";

type FadeInUpTransitionProps = TransitionProps & {
  fadeIn?: { timeout?: number; from?: number; to?: number };
  slideY?: { timeout?: number; from?: string; to?: string };
};

const FadeInUpTransition: ForwardRefExoticComponent<FadeInUpTransitionProps> =
  forwardRef<HTMLElement, FadeInUpTransitionProps>(
    (
      {
        children,
        fadeIn = { timeout: 700, from: 0, to: 1 },
        slideY = { timeout: 700, from: "100%", to: "0%" },
        ...props
      },
      outsideRed
    ) => {
      return (
        <FadeInTransition
          {...props}
          ref={outsideRed}
          from={0}
          to={1}
          timeout={700}
          {...fadeIn}
        >
          <SlideYTransition
            {...props}
            from={"100%"}
            to={"0%"}
            timeout={700}
            {...slideY}
          >
            {children}
          </SlideYTransition>
        </FadeInTransition>
      );
    }
  );

FadeInUpTransition.displayName = "FadeInUpTransition";

export { FadeInUpTransition };
