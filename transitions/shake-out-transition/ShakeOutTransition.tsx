import React, {
  FC,
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
  return `@keyframes ShakeOutTransition${styleIndex} {
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

type ShakeOutTransitionProps = TransitionProps & {
  to: string;
  from: string;
};

const ShakeOutTransition: ForwardRefExoticComponent<ShakeOutTransitionProps> =
  forwardRef<HTMLElement, ShakeOutTransitionProps>(
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
            animation: ``,
          },
          entered: {
            animation: ``,
          },
          exiting: {
            animation: `ShakeOutTransition${styleIndex} ${timeout}ms ${ease} ${delay}ms`,
          },
          exited: {
            animation: `ShakeOutTransition${styleIndex} ${timeout}ms ${ease} ${delay}ms`,
          },
        }),
        [delay, timeout, ease]
      );

      return (
        <Transition
          {...props}
          ref={outsideRef}
          timeout={timeout}
          defaultStyle={defaultStyle}
          transitionStyle={transitionStyle}
          className={"ShakeOutTransition"}
        >
          {children}
        </Transition>
      );
    }
  );

ShakeOutTransition.displayName = "ShakeOutTransition";

export { ShakeOutTransition };
