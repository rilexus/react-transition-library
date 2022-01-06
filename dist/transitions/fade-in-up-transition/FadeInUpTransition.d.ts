import { ForwardRefExoticComponent } from "react";
import { TransitionProps } from "../transition/TransitionProps.type";
declare type FadeInUpTransitionProps = TransitionProps & {
    fadeIn?: {
        timeout?: number;
        from?: number;
        to?: number;
    };
    slideY?: {
        timeout?: number;
        from?: string;
        to?: string;
    };
};
declare const FadeInUpTransition: ForwardRefExoticComponent<FadeInUpTransitionProps>;
export { FadeInUpTransition };
//# sourceMappingURL=FadeInUpTransition.d.ts.map