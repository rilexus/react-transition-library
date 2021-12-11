import React, { CSSProperties, FC, useMemo } from "react";
import { useCSSStyle } from "../../../hooks";
import { Transition } from "../../transition";
import { Ease } from "../../../ease";

const SlideInUpTransition: FC<{
  from: string;
  to: string;
  ease?: Ease;
  delay?: number;
  timeout: number;
  style?: CSSProperties;
  [key: string]: any;
}> = ({
  children,
  from,
  to,
  ease = Ease.ease,
  delay = 0,
  timeout,
  style,
  ...props
}) => {
  const defaultStyle = useCSSStyle(
    {
      willChange: "transform",
      transitionTimingFunction: `${ease}`,
      transitionDelay: `${delay}ms`,
      transition: `transform ${timeout}ms`,
      transform: `translateY(${from})`,
      ...style,
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
      className={"ScaleUpTransition"}
    >
      {children}
    </Transition>
  );
};
export { SlideInUpTransition };
