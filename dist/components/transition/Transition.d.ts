import React, { CSSProperties, ReactNode } from "react";
import { TransitionStylesType } from "../../types";
interface TransitionProps {
    defaultStyle: CSSProperties;
    transitionStyle: TransitionStylesType;
    className?: string;
    children: ReactNode;
    style?: CSSProperties;
    in?: boolean;
    as?: string;
    appear?: boolean;
    timeout: number | {
        appear?: number;
        enter?: number;
        exit?: number;
    };
    [key: string]: any;
}
declare const Transition: React.ForwardRefExoticComponent<Pick<TransitionProps, keyof TransitionProps> & React.RefAttributes<unknown>>;
export { Transition };
//# sourceMappingURL=Transition.d.ts.map