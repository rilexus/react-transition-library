import React from "react";
import { CSSTransition as RTGCSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

const CSSTransition = ({ children, ...props }: CSSTransitionProps) => {
  const nodeRef = React.useRef(null); // NOTE: this fixes the findDomNode bug
  return (
    <RTGCSSTransition nodeRef={nodeRef} {...props}>
      <div ref={nodeRef}>{children}</div>
    </RTGCSSTransition>
  );
};
export { CSSTransition };
