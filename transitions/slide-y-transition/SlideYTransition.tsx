import React, {
  CSSProperties,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  useMemo,
} from "react";
import { useCSSStyle } from "../../hooks";
import { Transition } from "../transition";
import { Ease } from "../../ease";
import { TransitionProps } from "../transition/TransitionProps.type";

type SlideYTransitionProps = TransitionProps & {
  from: string;
  to: string;
};

const SlideYTransition: ForwardRefExoticComponent<SlideYTransitionProps> =
  forwardRef<HTMLElement, SlideYTransitionProps>(
    (
      { children, from, to, ease = Ease.ease, delay = 0, timeout, ...props },
      outsideRef
    ) => {
      const defaultStyle = useCSSStyle(
        {
          willChange: "transform",
          transition: `transform ${timeout}ms ${ease} ${delay}ms`,
          transform: `translateY(${from})`,
        },
        [from, timeout, ease, delay]
      );
      const transitionStyle = useMemo(
        () => ({
          entering: {
            transform: `translateY(${to})`,
          },
          entered: {
            transform: `translateY(${to})`,
          },
          exiting: {
            transform: `translateY(${from})`,
          },
          exited: {
            transform: `translateY(${from})`,
          },
        }),
        [from, to]
      );
      return (
        <Transition
          {...props}
          ref={outsideRef}
          timeout={timeout}
          defaultStyle={defaultStyle}
          transitionStyle={transitionStyle}
          className={"ScaleInUpTransition"}
        >
          {children}
        </Transition>
      );
    }
  );
export { SlideYTransition };
