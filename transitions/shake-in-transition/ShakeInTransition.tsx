import React, { CSSProperties, FC, useEffect, useMemo } from "react";
import { css, keyframes } from "styled-components";
import { Transition } from "../transition";
import { Ease } from "../../ease";
import { useCSSStyle } from "../../hooks";
import { TransitionProps } from "../transition/TransitionProps.type";

const getShakeKeyframe = (
  from: string,
  to: string
) => `@keyframes ShakeInTransition {
  0% {
    -webkit-transform: translateX(${from});
    transform: translateX(${from});
  }

  6.5% {
    -webkit-transform: translateX(((${to} * 0.2) + ${to}) * -1)) rotateY(-9deg);
    transform: translateX(calc(((${to} * 0.2) + ${to}) * -1)) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(${to}) rotateY(7deg);
    transform: translateX(${to}) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(calc((${to} / 2) * -1)) rotateY(-5deg);
    transform: translateX(calc((${to} / 2) * -1)) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(calc(${to} / 3)) rotateY(3deg);
    transform: translateX(calc(${to} / 3)) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(${from});
    transform: translateX(${from});
  }
}`;

type ShakeInTransitionProps = TransitionProps & {
  to: string;
  from: string;
};

const ShakeInTransition: FC<ShakeInTransitionProps> = ({
  children,
  from,
  to,
  timeout,
  ease = Ease.ease,
  delay = 0,
  ...props
}) => {
  const shakeKeyFrame = useMemo(() => getShakeKeyframe(from, to), [from, to]);
  useEffect(() => {
    const sheet = document.styleSheets[0];
    sheet.insertRule(shakeKeyFrame, sheet.cssRules.length);
  }, [shakeKeyFrame]);

  const defaultStyle = useCSSStyle(
    {
      animationIterationCount: 1,
      animationFillMode: "forwards",
      animationDirection: "normal",
    },
    []
  );

  const transitionStyle = useMemo(
    () => ({
      entering: {
        animation: `ShakeInTransition ${timeout}ms ${ease} ${delay}ms`,
      },
      entered: {
        animation: `ShakeInTransition ${timeout}ms ${ease} ${delay}ms`,
      },
      exiting: {
        animation: ``,
      },
      exited: {
        animation: ``,
      },
    }),
    [timeout, ease, delay]
  );

  return (
    <Transition
      {...props}
      timeout={timeout}
      defaultStyle={defaultStyle}
      transitionStyle={transitionStyle}
      className={"ShakeInTransition"}
    >
      {children}
    </Transition>
  );
};

export { ShakeInTransition };
