import React from "react";
import { TransitionStatusType } from "../../types";
declare const Transition: React.ForwardRefExoticComponent<(Pick<import("react-transition-group/Transition").TimeoutProps<undefined> & {
    as?: string | undefined;
} & {
    ease?: import("../../ease/Ease.enum").Ease | undefined;
    delay?: number | undefined;
} & {
    defaultStyle: React.CSSProperties;
    transitionStyle: Partial<Record<TransitionStatusType, React.CSSProperties>>;
}, keyof import("react-transition-group/Transition").TimeoutProps<undefined>> | Pick<import("react-transition-group/Transition").EndListenerProps<undefined> & {
    as?: string | undefined;
} & {
    ease?: import("../../ease/Ease.enum").Ease | undefined;
    delay?: number | undefined;
} & {
    defaultStyle: React.CSSProperties;
    transitionStyle: Partial<Record<TransitionStatusType, React.CSSProperties>>;
}, keyof import("react-transition-group/Transition").EndListenerProps<undefined>>) & React.RefAttributes<HTMLElement>>;
export { Transition };
//# sourceMappingURL=Transition.d.ts.map