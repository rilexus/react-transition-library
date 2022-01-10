import React, { forwardRef, ForwardRefExoticComponent, useMemo } from "react";
import { useCSSStyle } from "../../hooks";
import { Transition } from "../transition";
import { TransitionProps } from "../transition/TransitionProps.type";
import { Ease } from "../../ease";

type TranslateTransitionProps = TransitionProps & {
  from: [string, string];
  to: [string, string];
};

const TranslateTransition: ForwardRefExoticComponent<TranslateTransitionProps> =
  forwardRef<HTMLElement, TranslateTransitionProps>(
    (
      { children, to, from, timeout, ease = Ease.ease, delay, ...props },
      outsideRef
    ) => {
      const defaultStyle = useCSSStyle(
        {
          willChange: "transform",
          transition: `transform ${timeout}ms ${ease} ${delay}ms`,
          transform: `translate(${from[0]}, ${from[1]})`,
        },
        [from[0], from[1], timeout, ease, delay]
      );
      const transitionStyle = useMemo(
        () => ({
          entering: {
            transform: `translate(${to[0]}, ${to[1]})`,
          },
          entered: {
            transform: `translate(${to[0]}, ${to[1]})`,
          },
          exiting: {
            transform: `translate(${from[0]}, ${from[1]})`,
          },
          exited: {
            transform: `translate(${from[0]}, ${from[1]})`,
          },
        }),
        [from[0], from[1], to[0], to[1]]
      );

      return (
        <Transition
          {...props}
          ref={outsideRef}
          timeout={timeout}
          defaultStyle={defaultStyle}
          transitionStyle={transitionStyle}
          className={"ScaleInUpTransition"}
        >
          {children}
        </Transition>
      );
    }
  );

export { TranslateTransition };
