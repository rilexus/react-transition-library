import React, { FC } from "react";
import { ScaleUpTransition } from "../scale-up-transition";
import { FadeInTransition } from "../fade-in-transition/FadeInTransition";

const ZoomInTransition: FC<{
  from: number;
  to: number;
  timeout: number;
  in?: boolean;
}> = ({ from = 0.9, to = 1, timeout, ...props }) => {
  return (
    <ScaleUpTransition
      {...props}
      from={from}
      to={to}
      timeout={timeout}
      in={props.in}
    >
      <FadeInTransition timeout={timeout} from={0} to={1} in={props.in}>
        {props.children}
      </FadeInTransition>
    </ScaleUpTransition>
  );
};

export { ZoomInTransition };
