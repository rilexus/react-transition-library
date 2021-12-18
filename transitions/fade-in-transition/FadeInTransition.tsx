import { Transition } from "../transition";
import React, { CSSProperties, forwardRef, ReactNode, useMemo } from "react";
import { Ease } from "../../ease";
import { TransitionProps } from "../transition/TransitionProps.type";

type FadeTransitionProps = TransitionProps & {
  children?: ReactNode;
  delay?: number;
  ease?: Ease;
  from: number;
  to: number;
};

const FadeInTransition = forwardRef<HTMLElement, FadeTransitionProps>(
  (
    { children, ease = Ease.ease, timeout, delay = 0, from, to, ...props },
    outsideRef
  ) => {
    const transitionStyle = useMemo(
      () => ({
        entered: {
          opacity: to,
        },
        entering: {
          opacity: to,
        },
        exiting: {
          opacity: from,
        },
        exited: {
          opacity: from,
        },
      }),
      [from, to]
    );

    const defaultStyle = useMemo<CSSProperties>(
      () => ({
        willChange: "opacity",
        transition: `opacity ${timeout}ms ${ease} ${delay}ms`,
      }),
      [timeout, delay, ease, from]
    );

    return (
      <Transition
        {...props}
        ref={outsideRef}
        timeout={timeout}
        defaultStyle={defaultStyle}
        transitionStyle={transitionStyle}
        className={"FadeInTransition"}
      >
        {children}
      </Transition>
    );
  }
);
export { FadeInTransition };
