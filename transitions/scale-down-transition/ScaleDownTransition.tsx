import React, { ForwardedRef, forwardRef, ReactNode, useMemo } from "react";
import {Ease} from "../../ease";
import {Transition} from "../transition/Transition";

type Props = {
  transformOrigin?: string;
  timeout: number;
  delay?: number;
  from: number;
  to: number;
  ease?: Ease;
  children: ReactNode;
  [key: string]: any;
  // ref?: ForwardedRef<HTMLDivElement>;
};

const ScaleDownTransition = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      timeout,
      ease = "ease",
      transformOrigin = "center",
      delay = "0",
      from,
      to,
      ...props
    },
    outsideRef: ForwardedRef<HTMLDivElement>
  ) => {
    const transitionStyle = useMemo(
      () => ({
        entered: {
          transform: `scale(${to})`,
        },
        entering: {
          transform: `scale(${to})`,
        },
        exiting: {
          transform: `scale(${from})`,
        },
        exited: {
          transform: `scale(${from})`,
        },
      }),
      [from, to]
    );
    const defaultStyle = useMemo(
      () => ({
        willChange: "transform",
        transformOrigin: transformOrigin,
        transitionTimingFunction: ease,
        transitionDelay: `${delay}ms`,
        transition: `transform ${timeout}ms`,
      }),
      [transformOrigin, ease, timeout, delay]
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

export { ScaleDownTransition };
