import {
  EndHandler,
  TransitionProps as RTGTransitionProps,
} from "react-transition-group/Transition";
import { TransitionStylesType } from "../../types";
import { CSSProperties } from "react";
import { Ease } from "../../ease";

type DynamicTransitionProps<
  RefElement extends undefined | HTMLElement = undefined
> = RTGTransitionProps<RefElement> & {
  as?: string;
};

type TransitionProps<RefElement extends undefined | HTMLElement = undefined> = {
  // addEndListener?: EndHandler<RefElement> | undefined;
  ease?: Ease;
  delay?: number;
} & DynamicTransitionProps<RefElement>;

type TransitionFactoryPropsType = TransitionProps & {
  defaultStyle: CSSProperties;
  transitionStyle: TransitionStylesType;
};

export type { TransitionFactoryPropsType, TransitionProps };
