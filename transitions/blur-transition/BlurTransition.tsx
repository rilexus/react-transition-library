import React, { FC, useMemo } from "react";
import { Transition } from "../transition";
import { useCSSStyle } from "../../hooks";

type Props = {
  timeout: number;
  in?: boolean;
  delay?: number;
  to: string;
  from: string;
  appear?: boolean;
};

const BlurTransition: FC<Props> = ({
  children,
  timeout,
  delay = 0,
  from = "0px",
  to,
  ["in"]: _in,
  ...props
}) => {
  const defaultStyle = useCSSStyle(
    {
      willChange: "filter",
      transition: `filter ${timeout}ms ease ${delay}ms`,
    },
    [timeout, delay]
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
      in={_in}
      timeout={timeout}
      defaultStyle={defaultStyle}
      transitionStyle={transitionStyle}
    >
      {children}
    </Transition>
  );
};
export { BlurTransition };
