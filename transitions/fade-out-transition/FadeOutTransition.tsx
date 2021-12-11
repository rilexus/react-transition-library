import React, { ReactNode } from "react";
import { Transition } from "../transition/Transition";

const FadeOutTransition = ({
  children,
  timeout,
  from,
  to,
  delay = 0,
  in: _in,
  ...props
}: {
  children: ReactNode;
  timeout: number;
  delay?: number;
  from: number;
  to: number;
  in?: boolean;
  [key: string]: any;
}) => {
  return (
    <Transition
      {...props}
      in={_in}
      className={"FadeOutTransition"}
      defaultStyle={{
        transition: `opacity ${timeout}ms ease ${delay}ms`,
        // opacity: 1,
      }}
      transitionStyle={{
        entering: {
          opacity: to,
        },
        entered: {
          opacity: to,
        },
        exiting: {
          opacity: from,
        },
        exited: {
          opacity: from,
        },
      }}
      timeout={timeout}
    >
      {children}
    </Transition>
  );
};

export { FadeOutTransition };
