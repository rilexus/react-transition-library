import React, { FC, useMemo } from "react";
import { Transition } from "../transition";

type Props = {
  timeout: number;
  delay?: number;
  in: boolean;
  from: number;
  to: number;
  appear?: boolean;
};
//
const ScaleTransition: FC<Props> = ({
  children,
  timeout,
  delay = "0",
  ["in"]: _in,
  from,
  to,
  ...props
}) => {
  const defaultStyle = useMemo(
    () => ({
      transform: `scale(${from})`,
      transition: `transform ${timeout}ms ease ${delay}ms`,
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
      timeout={timeout}
      defaultStyle={defaultStyle}
      transitionStyle={transitionStyle}
    >
      {children}
    </Transition>
  );
};
export { ScaleTransition };
