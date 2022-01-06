import { TransitionProps } from "../transition/TransitionProps.type";
import { ForwardRefExoticComponent } from "react";
declare type DefaultFadeOutProps = {
    timeout?: number;
    from?: number;
    to?: number;
};
declare type DefaultSlideYProps = {
    timeout?: number;
    from?: string;
    to?: string;
};
declare type FadeOutDownTransitionProps = TransitionProps & {
    fadeOut?: DefaultFadeOutProps;
    slideY?: DefaultSlideYProps;
};
declare const FadeOutDownTransition: ForwardRefExoticComponent<FadeOutDownTransitionProps>;
export { FadeOutDownTransition };
//# sourceMappingURL=FadeOutDownTransition.d.ts.map