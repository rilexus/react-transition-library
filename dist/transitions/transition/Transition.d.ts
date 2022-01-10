import React from "react";
import { TransitionStatusType } from "../../types";
declare const Transition: React.ForwardRefExoticComponent<(Pick<{
    addEndListener?: ((node: HTMLElement, done: () => void) => void) | undefined;
    ease?: import("../../ease/Ease.enum").Ease | undefined;
    delay?: number | undefined;
} & import("react-transition-group/Transition").TimeoutProps<undefined> & {
    as?: string | undefined;
} & {
    defaultStyle: React.CSSProperties;
    transitionStyle: Partial<Record<TransitionStatusType, React.CSSProperties>>;
}, keyof import("react-transition-group/Transition").TimeoutProps<undefined>> | Pick<{
    addEndListener?: ((node: HTMLElement, done: () => void) => void) | undefined;
    ease?: import("../../ease/Ease.enum").Ease | undefined;
    delay?: number | undefined;
} & import("react-transition-group/Transition").EndListenerProps<undefined> & {
    as?: string | undefined;
} & {
    defaultStyle: React.CSSProperties;
    transitionStyle: Partial<Record<TransitionStatusType, React.CSSProperties>>;
}, keyof import("react-transition-group/Transition").EndListenerProps<undefined>>) & React.RefAttributes<HTMLElement>>;
export { Transition };
//# sourceMappingURL=Transition.d.ts.map