import React from "react";
import { Ease } from "../../ease";
declare const ZoomTransition: React.ForwardRefExoticComponent<(Pick<{
    ease?: Ease | undefined;
    delay?: number | undefined;
} & import("react-transition-group/Transition").TimeoutProps<undefined> & {
    as?: string | undefined;
} & {
    delay?: number | undefined;
    ease?: string | undefined;
    from: number;
    to: number;
    transformOrigin?: string | undefined;
}, keyof import("react-transition-group/Transition").TimeoutProps<undefined>> | Pick<{
    ease?: Ease | undefined;
    delay?: number | undefined;
} & import("react-transition-group/Transition").EndListenerProps<undefined> & {
    as?: string | undefined;
} & {
    delay?: number | undefined;
    ease?: string | undefined;
    from: number;
    to: number;
    transformOrigin?: string | undefined;
}, keyof import("react-transition-group/Transition").EndListenerProps<undefined>>) & React.RefAttributes<HTMLElement>>;
export { ZoomTransition };
//# sourceMappingURL=ZoomTransition.d.ts.map