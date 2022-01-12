import { ForwardRefExoticComponent } from "react";
import { TransitionProps } from "../transition/TransitionProps.type";
declare type BackdropTransitionProps = {
    from: string;
    to: string;
    backgroundColor: string;
} & TransitionProps;
/**
 * NOTE: css backdrop-filter transition is a ducking bitch!
 * It does not play well with other transitions. Especially with the opacity.
 * */
declare const BackdropTransition: ForwardRefExoticComponent<BackdropTransitionProps>;
export { BackdropTransition };
//# sourceMappingURL=BackdropTransition.d.ts.map