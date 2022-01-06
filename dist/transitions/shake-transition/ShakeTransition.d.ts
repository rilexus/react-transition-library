import { ForwardRefExoticComponent } from "react";
import { TransitionProps } from "../transition/TransitionProps.type";
declare type ShakeTransitionProps = TransitionProps & {
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
declare const ShakeTransition: ForwardRefExoticComponent<ShakeTransitionProps>;
export { ShakeTransition };
//# sourceMappingURL=ShakeTransition.d.ts.map