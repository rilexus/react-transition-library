import React from "react";
import { Transition } from "../transition";
import { Ease } from "../../ease";
import { TransitionProps } from "../transition/TransitionProps.type";

type Props = TransitionProps & {
  from: number;
  to: number;
};

const FadeOutTransition = ({
  children,
  timeout,
  from,
  to,
  ease = Ease.ease,
  delay = 0,
  in: _in,
  ...props
}: Props) => {
  return (
    <Transition
      {...props}
      in={_in}
      className={"FadeOutTransition"}
      defaultStyle={{
        transition: `opacity ${timeout}ms ${ease} ${delay}ms`,
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
