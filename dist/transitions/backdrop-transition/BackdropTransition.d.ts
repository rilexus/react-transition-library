import { ForwardRefExoticComponent } from "react";
import { TransitionProps } from "../transition/TransitionProps.type";
declare type BackdropTransitionProps = TransitionProps & {
    from: string;
    to: string;
    backgroundColor: string;
};
/**
 * NOTE: css backdrop-filter transition is a ducking bitch!
 * It does not play well with other transitions. Especially with the opacity.
 * */
declare const BackdropTransition: ForwardRefExoticComponent<BackdropTransitionProps>;
export { BackdropTransition };
//# sourceMappingURL=BackdropTransition.d.ts.map