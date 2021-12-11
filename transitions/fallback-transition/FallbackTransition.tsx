import React, { FC } from "react";
import { ScaleDownTransition } from "../scale-down-transition";
import { BlurTransition } from "../blur-transition";
import {FadeOutTransition} from "../fade-out-transition/FadeOutTransition";


type Props = {
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
//
const FallbackTransition: FC<Props> = ({
  children,
  scale,
  transformOrigin,
  blur,
  ["in"]: _in,
}) => {
  return (
    <ScaleDownTransition
      transformOrigin={transformOrigin}
      timeout={scale.timeout}
      in={_in}
      from={scale.from}
      delay={scale.delay || 0}
      to={scale.to}
    >
      <div>
        <BlurTransition
          delay={blur.delay || 0}
          from={blur.from}
          to={blur.to}
          timeout={blur.timeout}
          in={_in}
        >
          <div>
            <FadeOutTransition timeout={400} in={_in} from={1} to={0.4}>
              {children}
            </FadeOutTransition>
          </div>
        </BlurTransition>
      </div>
    </ScaleDownTransition>
  );
};

export { FallbackTransition };
