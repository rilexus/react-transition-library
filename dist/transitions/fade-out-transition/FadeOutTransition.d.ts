/// <reference types="react" />
import { TransitionProps } from "../transition/TransitionProps.type";
declare type Props = TransitionProps & {
    from: number;
    to: number;
};
declare const FadeOutTransition: ({ children, timeout, from, to, ease, delay, in: _in, ...props }: Props) => JSX.Element;
export { FadeOutTransition };
//# sourceMappingURL=FadeOutTransition.d.ts.map