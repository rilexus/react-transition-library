import { FC } from "react";
declare type Props = {
    in: boolean;
    transformOrigin?: string;
    scale: {
        from: number;
        to: number;
        timeout: number;
        delay?: number;
    };
    blur: {
        from: string;
        to: string;
        timeout: number;
        delay?: number;
    };
};
declare const FallbackTransition: FC<Props>;
export { FallbackTransition };
//# sourceMappingURL=FallbackTransition.d.ts.map