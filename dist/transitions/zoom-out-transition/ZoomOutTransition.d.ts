/// <reference types="react" />
declare const ZoomOutTransition: import("react").ForwardRefExoticComponent<(Pick<{
    ease?: import("../../ease/Ease.enum").Ease | undefined;
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
    ease?: import("../../ease/Ease.enum").Ease | undefined;
    delay?: number | undefined;
} & import("react-transition-group/Transition").EndListenerProps<undefined> & {
    as?: string | undefined;
} & {
    delay?: number | undefined;
    ease?: string | undefined;
    from: number;
    to: number;
    transformOrigin?: string | undefined;
}, keyof import("react-transition-group/Transition").EndListenerProps<undefined>>) & import("react").RefAttributes<HTMLElement>>;
export { ZoomOutTransition };
//# sourceMappingURL=ZoomOutTransition.d.ts.map