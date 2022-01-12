import React, { forwardRef, ForwardRefExoticComponent, useMemo } from "react";
import { Transition } from "../transition";
import { TransitionProps } from "../transition/TransitionProps.type";
import { Ease } from "../../ease";

type Props = {
  from: number;
  to: number;
} & TransitionProps;

const ScaleTransition: ForwardRefExoticComponent<Props> = forwardRef<
  HTMLElement,
  Props
>(
  (
    {
      children,
      timeout,
      delay = "0",
      ["in"]: _in,
      from,
      ease = Ease.ease,
      to,
      ...props
    },
    outsideRef
  ) => {
    const defaultStyle = useMemo(
      () => ({
        transform: `scale(${from})`,
        transition: `transform ${timeout}ms ${ease} ${delay}ms`,
      }),
      [from, timeout, delay]
    );
    const transitionStyle = useMemo(
      () => ({
        entered: {
          transform: `scale(${to})`,
        },
        entering: {
          transform: `scale(${to})`,
        },
      }),
      [to]
    );
    return (
      <Transition
        {...props}
        in={_in}
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

ScaleTransition.displayName = "ScaleTransition";
export { ScaleTransition };
