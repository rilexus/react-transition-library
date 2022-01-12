import React, { forwardRef, ForwardRefExoticComponent, useMemo } from "react";
import { useCSSStyle } from "../../hooks";
import { Transition } from "../transition";
import { TransitionProps } from "../transition/TransitionProps.type";

type BackdropTransitionProps = {
  from: string;
  to: string;
  backgroundColor: string;
} & TransitionProps;

/**
 * NOTE: css backdrop-filter transition is a ducking bitch!
 * It does not play well with other transitions. Especially with the opacity.
 * */
const BackdropTransition: ForwardRefExoticComponent<BackdropTransitionProps> =
  forwardRef<HTMLElement, BackdropTransitionProps>(
    (
      {
        timeout,
        delay = 0,
        to,
        ease = "ease",
        from,
        backgroundColor,
        children,
        ...props
      },
      outsideRef
    ) => {
      const defaultStyle = useCSSStyle(
        {
          willChange: "backdrop-filter",
          backgroundColor,
          transition: `backdrop-filter ${timeout}ms ${ease} ${delay}ms, -webkit-backdrop-filter ${timeout}ms ${ease} ${delay}ms`,
        },
        [timeout, delay]
      );

      const transitionStyle = useMemo(
        () => ({
          entering: {
            WebkitBackdropFilter: `blur(${to})`,
            backdropFilter: `blur(${to})`,
          },
          entered: {
            WebkitBackdropFilter: `blur(${to})`,
            backdropFilter: `blur(${to})`,
          },
          exiting: {
            WebkitBackdropFilter: `blur(${from})`,
            backdropFilter: `blur(${from})`,
          },
          exited: {
            WebkitBackdropFilter: `blur(${from})`,
            backdropFilter: `blur(${from})`,
          },
        }),
        [from, to]
      );
      return (
        <Transition
          {...props}
          timeout={timeout}
          ref={outsideRef}
          defaultStyle={defaultStyle}
          transitionStyle={transitionStyle}
          className={"BackdropTransition"}
        >
          {children}
        </Transition>
      );
    }
  );
BackdropTransition.displayName = "BackdropTransition";
export { BackdropTransition };
