import { ForwardRefRenderFunction } from "react";
import { TransitionProps } from "../transitions/transition/TransitionProps.type";
declare function createEventTransition<Element extends HTMLElement, Props extends {
    timeout: number;
} & TransitionProps>(type: string, render: ForwardRefRenderFunction<Element, Props>): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<Props> & import("react").RefAttributes<Element>>;
export { createEventTransition };
//# sourceMappingURL=createEventTransition.d.ts.map