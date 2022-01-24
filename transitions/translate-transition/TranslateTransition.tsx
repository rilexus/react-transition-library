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
      {
        children,
        to,
        from,
        timeout = 400,
        ease = Ease.ease,
        delay = 0,
        ...props
      },
      outsideRef
    ) => {
      const fromX = from[0];
      const fromY = from[1];
      const toX = to[0];
      const toY = to[1];
      const defaultStyle = useCSSStyle(
        {
          willChange: "transform",
          transition: `transform ${timeout}ms ${ease} ${delay}ms`,
          transform: `translate(${fromX}, ${fromY})`,
        },
        [fromX, fromY, timeout, ease, delay]
      );

      const transitionStyle = useMemo(
        () => ({
          entering: {
            transform: `translate(${toX}, ${toY})`,
          },
          entered: {
            transform: `translate(${toX}, ${toY})`,
          },
          exiting: {
            transform: `translate(${fromX}, ${fromY})`,
          },
          exited: {
            transform: `translate(${fromX}, ${fromY})`,
          },
        }),
        [fromX, fromY, toX, toY]
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
TranslateTransition.displayName = "TranslateTransition";
export { TranslateTransition };
