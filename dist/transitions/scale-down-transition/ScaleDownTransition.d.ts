import React, { ReactNode } from "react";
import { Ease } from "../../ease";
declare type Props = {
    transformOrigin?: string;
    timeout: number;
    delay?: number;
    from: number;
    to: number;
    ease?: Ease;
    children: ReactNode;
    [key: string]: any;
};
declare const ScaleDownTransition: React.ForwardRefExoticComponent<Pick<Props, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export { ScaleDownTransition };
//# sourceMappingURL=ScaleDownTransition.d.ts.map