import React, { CSSProperties, ReactNode } from "react";
import { Ease } from "../../ease";
declare type FadeTransitionProps = {
    children?: ReactNode;
    timeout: number;
    delay?: number;
    style?: CSSProperties;
    in?: boolean;
    ease?: Ease;
    appear?: boolean;
    from: number;
    to: number;
    [key: string]: any;
};
declare const FadeInTransition: React.ForwardRefExoticComponent<Pick<FadeTransitionProps, keyof FadeTransitionProps> & React.RefAttributes<HTMLDivElement>>;
export { FadeInTransition };
//# sourceMappingURL=FadeInTransition.d.ts.map