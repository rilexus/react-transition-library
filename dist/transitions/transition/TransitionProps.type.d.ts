import { TransitionProps as RTGTransitionProps } from "react-transition-group/Transition";
import { TransitionStylesType } from "../../types";
import { CSSProperties } from "react";
import { Ease } from "../../ease";
declare type DynamicTransitionProps<RefElement extends undefined | HTMLElement = undefined> = RTGTransitionProps<RefElement> & {
    as?: string;
};
declare type TransitionProps<RefElement extends undefined | HTMLElement = undefined> = {
    ease?: Ease;
    delay?: number;
} & DynamicTransitionProps<RefElement>;
declare type TransitionFactoryPropsType = TransitionProps & {
    defaultStyle: CSSProperties;
    transitionStyle: TransitionStylesType;
};
export type { TransitionFactoryPropsType, TransitionProps };
//# sourceMappingURL=TransitionProps.type.d.ts.map