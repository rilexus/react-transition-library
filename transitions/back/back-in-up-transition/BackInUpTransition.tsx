import React, { FC } from "react";
import { ZoomInTransition } from "../../zoom-in-transition";
import { SlideInUpTransition } from "../../slide-in";

const BackInUpTransition: FC<any> = ({
  children,
  timeout,
  zoomIn: { from: zoomInFrom, to: zoomInTo },
  in: _in,
  slideIn: { from: slideInFrom, to: slideInTo },
  ...props
}) => {
  return (
    <ZoomInTransition
      {...props}
      timeout={timeout}
      to={zoomInTo}
      from={zoomInFrom}
      in={_in}
    >
      <div>
        <SlideInUpTransition
          from={slideInFrom}
          to={slideInTo}
          timeout={timeout}
          in={_in}
        >
          {children}
        </SlideInUpTransition>
      </div>
    </ZoomInTransition>
  );
};
export { BackInUpTransition };
