import { Transition } from "../transition";
import React, { CSSProperties, forwardRef, ReactNode, useMemo } from "react";
import { Ease } from "../../ease";

type FadeTransitionProps = {
  children?: ReactNode;
  timeout: number;
  delay?: number;
  style?: CSSProperties;
  in?: boolean;
  ease?: Ease;
  appear?: boolean;
  from: number;
  to: number;
  [key: string]: any;
};

const FadeInTransition = forwardRef<HTMLDivElement, FadeTransitionProps>(
  (
    {
      children,
      ease = Ease.ease,
      timeout,
      delay = 0,
      style,
      from = 0,
      to = 1,
      ...props
    }: FadeTransitionProps,
    outsideRef: any
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
        style={style}
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
