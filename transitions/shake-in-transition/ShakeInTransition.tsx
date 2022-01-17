import React, {
  forwardRef,
  ForwardRefExoticComponent,
  useEffect,
  useMemo,
} from "react";

import { Transition } from "../transition";
import { Ease } from "../../ease";
import { useCSSStyle } from "../../hooks";
import { TransitionProps } from "../transition/TransitionProps.type";

let styleIndex = 0;
const getShakeKeyframe = (from: string, to: string) => {
  styleIndex++;
  return `@keyframes ShakeInTransition${styleIndex} {
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
};

type ShakeInTransitionProps = TransitionProps & {
  to: string;
  from: string;
};

const ShakeInTransition: ForwardRefExoticComponent<ShakeInTransitionProps> =
  forwardRef<HTMLElement, ShakeInTransitionProps>(
    (
      { children, from, to, timeout, ease = Ease.ease, delay = 0, ...props },
      outsideRef
    ) => {
      const shakeKeyFrame = useMemo(
        () => getShakeKeyframe(from, to),
        [from, to]
      );
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
            animation: `ShakeInTransition${styleIndex} ${timeout}ms ${ease} ${delay}ms`,
          },
          entered: {
            animation: `ShakeInTransition${styleIndex} ${timeout}ms ${ease} ${delay}ms`,
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
          ref={outsideRef}
          timeout={timeout}
          defaultStyle={defaultStyle}
          transitionStyle={transitionStyle}
          className={"ShakeInTransition"}
        >
          {children}
        </Transition>
      );
    }
  );

ShakeInTransition.displayName = "ShakeInTransition";

export { ShakeInTransition };
