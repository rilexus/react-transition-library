import React, { CSSProperties, ReactElement, useMemo } from "react";
import { Transition } from "../transition/Transition";
import { useCSSStyle } from "../../hooks/use-css-style";
import { Ease } from "../../ease";

type ScaleUpTransitionProps = {
  children: ReactElement;
  delay?: number;
  ease?: string;
  from: number;
  to: number;
  timeout: number;
  in?: boolean;
  appear?: boolean;
  style?: CSSProperties;
  transformOrigin?: string;
  [key: string]: any;
};

const ZoomInTransition = ({
  children,
  delay = 0,
  ease = Ease.ease,
  transformOrigin = "center",
  from,
  to,
  style,
  timeout,
  ...props
}: ScaleUpTransitionProps) => {
  const defaultStyle = useCSSStyle(
    {
      transformOrigin: transformOrigin,
      willChange: "transform",
      transition: `transform ${timeout}ms ${ease} ${delay}ms`,
    },
    [timeout, ease, delay]
  );
  const transitionStyle = useMemo(
    () => ({
      entering: {
        transform: `scale(${to})`,
      },
      entered: {
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
  return (
    <Transition
      {...props}
      timeout={timeout}
      style={style}
      defaultStyle={defaultStyle}
      transitionStyle={transitionStyle}
      className={"ScaleUpTransition"}
    >
      {children}
    </Transition>
  );
};

export { ZoomInTransition };
