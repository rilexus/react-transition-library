import React, {
  CSSProperties,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  useMemo,
} from "react";
import { useCSSStyle } from "../../hooks";
import { Transition } from "../transition";
import { Ease } from "../../ease";
import { TransitionProps } from "../transition/TransitionProps.type";
import { TranslateTransition } from "../translate-transition";

type SlideYTransitionProps = TransitionProps & {
  from: string;
  to: string;
};

const SlideYTransition: ForwardRefExoticComponent<SlideYTransitionProps> =
  forwardRef<HTMLElement, SlideYTransitionProps>(
    ({ children, from, to, ...props }, outsideRef) => {
      return (
        <TranslateTransition
          {...props}
          ref={outsideRef}
          from={["0px", from]}
          to={["0px", to]}
        >
          {children}
        </TranslateTransition>
      );
    }
  );
export { SlideYTransition };
