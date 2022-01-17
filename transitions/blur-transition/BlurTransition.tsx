import React, {
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  useMemo,
} from "react";
import { Transition } from "../transition";
import { useCSSStyle } from "../../hooks";
import { Ease } from "../../ease";
import { TransitionProps } from "../transition/TransitionProps.type";

type BlurTransitionProps = TransitionProps & {
  to: string;
  from: string;
};

const BlurTransition: ForwardRefExoticComponent<BlurTransitionProps> =
  forwardRef<HTMLElement, BlurTransitionProps>(
    (
      { children, timeout, delay = 0, from, to, ease = Ease.ease, ...props },
      outsideRef
    ) => {
      const defaultStyle = useCSSStyle(
        {
          willChange: "filter",
          transition: `filter ${timeout}ms ${ease} ${delay}ms`,
        },
        [timeout, delay, ease]
      );

      const transitionStyle = useMemo(
        () => ({
          entering: {
            filter: `blur(${to})`,
          },
          entered: {
            filter: `blur(${to})`,
          },
          exiting: {
            filter: `blur(${from})`,
          },
          exited: {
            filter: `blur(${from})`,
          },
        }),
        [from, to]
      );
      return (
        <Transition
          {...props}
          ref={outsideRef}
          timeout={timeout}
          defaultStyle={defaultStyle}
          transitionStyle={transitionStyle}
        >
          {children}
        </Transition>
      );
    }
  );

BlurTransition.displayName = "BlurTransition";
export { BlurTransition };
