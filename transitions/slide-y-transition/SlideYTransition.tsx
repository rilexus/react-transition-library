import React, { CSSProperties, FC, useMemo } from "react";
import { useCSSStyle } from "../../hooks";
import { Transition } from "../transition";
import { Ease } from "../../ease";
import { TransitionProps } from "../transition/TransitionProps.type";

const SlideYTransition: FC<
  TransitionProps & {
    from: string;
    to: string;
  }
> = ({
  children,
  from,
  to,
  ease = Ease.ease,
  delay = 0,
  timeout,
  ...props
}) => {
  const defaultStyle = useCSSStyle(
    {
      willChange: "transform",
      transition: `transform ${timeout}ms ${ease} ${delay}ms`,
      transform: `translateY(${from})`,
    },
    [from, timeout, ease, delay]
  );
  const transitionStyle = useMemo(
    () => ({
      entering: {
        transform: `translateY(${to})`,
      },
      entered: {
        transform: `translateY(${to})`,
      },
      exiting: {
        transform: `translateY(${from})`,
      },
      exited: {
        transform: `translateY(${from})`,
      },
    }),
    [from, to]
  );
  return (
    <Transition
      {...props}
      timeout={timeout}
      defaultStyle={defaultStyle}
      transitionStyle={transitionStyle}
      className={"ScaleInUpTransition"}
    >
      {children}
    </Transition>
  );
};
export { SlideYTransition };
