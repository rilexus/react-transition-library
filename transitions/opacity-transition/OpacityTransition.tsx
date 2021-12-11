import React, { FC } from "react";
import { TransitionProps } from "react-transition-group/Transition";
import { Transition } from "../transition/Transition";

const OpacityTransition: FC<TransitionProps> = ({
  children,
  from,
  to,
  delay = 0,
  ...props
}) => {
  return (
    <Transition
      {...props}
      defaultStyle={{
        willChange: "opacity",
        transition: `opacity ${props.timeout}ms ease ${delay}ms`,
      }}
      transitionStyle={{
        entered: {
          opacity: to,
        },
        entering: {
          opacity: from,
        },
        exiting: {},
        exited: {
          opacity: from,
        },
      }}
    >
      {children}
    </Transition>
  );
};

export { OpacityTransition };
