import React, { FC, useMemo } from "react";
import { Transition } from "../transition";
import { useCSSStyle } from "../../hooks";
import { Ease } from "../../ease";
import { TransitionProps } from "../transition/TransitionProps.type";

type BlurTransitionProps = TransitionProps & {
  to: string;
  from: string;
};

const BlurTransition: FC<BlurTransitionProps> = ({
  children,
  timeout,
  delay = 0,
  from,
  to,
  ease = Ease.ease,
  ...props
}) => {
  const defaultStyle = useCSSStyle(
    {
      willChange: "filter",
      transition: `filter ${timeout}ms ${ease} ${delay}ms`,
    },
    [timeout, delay, ease]
  );

  const transitionStyle = useMemo(
    () => ({
      entering: {
        filter: `blur(${to})`,
      },
      entered: {
        filter: `blur(${to})`,
      },
      exiting: {
        filter: `blur(${from})`,
      },
      exited: {
        filter: `blur(${from})`,
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
    >
      {children}
    </Transition>
  );
};
export { BlurTransition };
