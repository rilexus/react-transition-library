import { CSSProperties, ReactElement } from "react";
declare type ScaleUpTransitionProps = {
    children: ReactElement;
    delay?: number;
    ease?: string;
    from: number;
    to: number;
    timeout: number;
    in?: boolean;
    appear?: boolean;
    style?: CSSProperties;
    transformOrigin?: string;
    [key: string]: any;
};
declare const ZoomInTransition: ({ children, delay, ease, transformOrigin, from, to, style, timeout, ...props }: ScaleUpTransitionProps) => JSX.Element;
export { ZoomInTransition };
//# sourceMappingURL=ZoomInTransition.d.ts.map