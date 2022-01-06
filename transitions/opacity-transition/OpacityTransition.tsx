import React, {
  CSSProperties,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  useMemo,
} from "react";
import { Transition } from "../transition/Transition";
import { TransitionProps } from "../transition/TransitionProps.type";
import { Ease } from "../../ease";

type OpacityTransitionProps = TransitionProps & {
  from: number;
  to: number;
};

const OpacityTransition: ForwardRefExoticComponent<OpacityTransitionProps> =
  forwardRef<HTMLElement, OpacityTransitionProps>(
    (
      { children, from, to, delay = 0, timeout, ease = Ease.ease, ...props },
      outsideRef
    ) => {
      const transitionStyle = useMemo(
        () => ({
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
        }),
        [from, to]
      );

      const defaultStyle = useMemo<CSSProperties>(
        () => ({
          // willChange: "opacity", // NOTE: this value interferes with the backdrop filter. If the backdrop is positioned absolute over the OpacityTransition, backdrop does not animate.
          transition: `opacity ${timeout}ms ${ease} ${delay}ms`,
        }),
        [timeout, delay, ease]
      );

      return (
        <Transition
          {...props}
          ref={outsideRef}
          timeout={timeout}
          defaultStyle={defaultStyle}
          transitionStyle={transitionStyle}
          className={"OpacityTransition"}
        >
          {children}
        </Transition>
      );
    }
  );

export { OpacityTransition };
