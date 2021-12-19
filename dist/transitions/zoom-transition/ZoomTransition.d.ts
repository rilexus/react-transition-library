import { FC } from "react";
import { TransitionProps } from "../transition/TransitionProps.type";
declare type ZoomTransitionProps = TransitionProps & {
    delay?: number;
    ease?: string;
    from: number;
    to: number;
    transformOrigin?: string;
};
declare const ZoomTransition: FC<ZoomTransitionProps>;
export { ZoomTransition };
//# sourceMappingURL=ZoomTransition.d.ts.map