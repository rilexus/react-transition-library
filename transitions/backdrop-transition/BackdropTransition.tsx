import React, { useMemo } from "react";
import { useCSSStyle } from "../../hooks";
import { Transition } from "../transition";

/**
 * NOTE: css backdrop-filter transition is a ducking bitch!
 * It does not play well with other transitions. Especially with the opacity.
 * */
const BackdropTransition = ({
  timeout,
  delay = 0,
  to,
  ease = "ease",
  from,
  in: _in,
  children,
  ...props
}: any) => {
  const defaultStyle = useCSSStyle(
    {
      willChange: "backdrop-filter",
      transition: `
      backdrop-filter ${timeout}ms ${ease} ${delay}ms,
      opacity ${timeout}ms ${ease} ${delay}ms`, // Why opacity you may ask? Because duck this backdrop-filter! That's why!
    },
    [timeout, delay]
  );

  const transitionStyle = useMemo(
    () => ({
      entering: {
        backdropFilter: `blur(${to})`,
        opacity: 1,
      },
      entered: {
        backdropFilter: `blur(${to})`,
        opacity: 1,
      },
      exiting: {
        backdropFilter: `blur(${from})`,
        opacity: 0,
      },
      exited: {
        backdropFilter: `blur(${from})`,
        opacity: 0,
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

export { BackdropTransition };
