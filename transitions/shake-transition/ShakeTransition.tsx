import React, { forwardRef, ForwardRefExoticComponent } from "react";
import { ShakeInTransition } from "../shake-in-transition";
import { ShakeOutTransition } from "../shake-out-transition";
import { TransitionProps } from "../transition/TransitionProps.type";

type ShakeTransitionProps = TransitionProps & {
  from: string;
  to: string;
  delay: number;
  timeout: number;
};

/**
 * Shake Transition
 * @example <caption>Shake Transition</caption>
 * <ShakeTransition
    in={true}
    delay={1000}
    timeout={700}
    from={"0px"}
    to={"2rem"}
    >
      <div>ShakeTransition</div>
  </ShakeTransition>
 **/
const ShakeTransition: ForwardRefExoticComponent<ShakeTransitionProps> =
  forwardRef<HTMLElement, ShakeTransitionProps>(
    (
      { from = "0px", to = "2rem", timeout, children, ...props },
      outsideRef
    ) => {
      return (
        <ShakeInTransition
          // shake when animate === true
          {...props}
          ref={outsideRef}
          from={from}
          to={to}
          timeout={timeout}
        >
          <ShakeOutTransition
            // shake when animate === false
            {...props}
            to={to}
            from={from}
            timeout={timeout}
          >
            {children}
          </ShakeOutTransition>
        </ShakeInTransition>
      );
    }
  );

export { ShakeTransition };
