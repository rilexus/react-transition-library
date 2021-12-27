import React, { FC, useMemo } from "react";
import { useCSSStyle } from "../../hooks";
import { Transition } from "../transition";
import { TransitionProps } from "../transition/TransitionProps.type";

type BackdropTransitionProps = TransitionProps & {
  from: string;
  to: string;
  backgroundColor: string;
};

/**
 * NOTE: css backdrop-filter transition is a ducking bitch!
 * It does not play well with other transitions. Especially with the opacity.
 * */
const BackdropTransition: FC<BackdropTransitionProps> = ({
  timeout,
  delay = 0,
  to,
  ease = "ease",
  from,
  backgroundColor,
  children,
  ...props
}) => {
  const defaultStyle = useCSSStyle(
    {
      willChange: "backdrop-filter",
      backgroundColor,
      transition: `
      backdrop-filter ${timeout}ms ${ease} ${delay}ms
      `,
    },
    [timeout, delay]
  );

  const transitionStyle = useMemo(
    () => ({
      entering: {
        backdropFilter: `blur(${to})`,
      },
      entered: {
        backdropFilter: `blur(${to})`,
      },
      exiting: {
        backdropFilter: `blur(${from})`,
      },
      exited: {
        backdropFilter: `blur(${from})`,
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

export { BackdropTransition };
