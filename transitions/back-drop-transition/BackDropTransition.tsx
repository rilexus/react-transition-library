import React, { useMemo } from "react";
import { useCSSStyle } from "../../hooks";
import { Transition } from "../transition";

const BackDropTransition = ({
  timeout,
  delay = 0,
  to,
  ease = "ease",
  from,
  in: _in,
  children,
  style,
  ...props
}: any) => {
  const defaultStyle = useCSSStyle(
    {
      willChange: "backdrop-filter",
      transition: `backdrop-filter ${timeout}ms ${ease} ${delay}ms, opacity ${timeout}ms ${ease} ${delay}ms`,
      ...style,
    },
    [timeout, delay]
  );

  const transitionStyle = useMemo(
    () => ({
      entering: {
        backdropFilter: `blur(${to}px)`,
        opacity: 1,
      },
      entered: {
        backdropFilter: `blur(${to}px)`,
        opacity: 1,
      },
      exiting: {
        backdropFilter: `blur(${from}px)`,
        opacity: 0,
      },
      exited: {
        backdropFilter: `blur(${from}px)`,
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

export { BackDropTransition };
