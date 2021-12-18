import { FC, ForwardedRef } from "react";
import { Ease } from "../../ease";
declare type Props = {
    timeout: number;
    from: number;
    ease?: Ease;
    to: number;
    animate?: boolean;
    onPress?: (ref: ForwardedRef<HTMLDivElement>) => void;
    onPressStart?: (ref: ForwardedRef<HTMLDivElement>) => void;
    onPressed?: (ref: ForwardedRef<HTMLDivElement>) => void;
    delay?: number;
};
declare const TouchScaleTransition: FC<Props>;
export { TouchScaleTransition };
//# sourceMappingURL=TouchScaleTransition.d.ts.map