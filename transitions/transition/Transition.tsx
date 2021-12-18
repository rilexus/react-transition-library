import { Transition as RTGTransition } from "react-transition-group";
import React, {
  createElement,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { TransitionStatusType } from "../../types";
import { TransitionFactoryPropsType } from "./TransitionProps.type";

const Transition = forwardRef<HTMLElement, TransitionFactoryPropsType>(
  (
    { children, defaultStyle, transitionStyle, className, as, style, ...props },
    outsideRef: any
  ) => {
    const [_in, _setIn] = useState(false);
    const timeoutRef = useRef<any>();
    const nodeRef = React.useRef(null);

    useEffect(() => {
      // NOTE: This is a workaround entering state not being animated when this
      // Component should animate on mount see:<Ω>
      requestAnimationFrame(() => {
        timeoutRef.current = setTimeout(() => {
          //@ts-ignore
          _setIn(props.in);
        }, 5);
      });
      return () => {
        clearTimeout(timeoutRef.current);
      };
    }, [props.in, timeoutRef]);

    useEffect(() => {
      if (nodeRef.current && outsideRef) {
        outsideRef.current = nodeRef.current;
      }
    }, [nodeRef]);

    return (
      <RTGTransition {...props} in={_in} nodeRef={nodeRef}>
        {(transitionStatus: TransitionStatusType) => {
          return createElement(
            as || "div",
            {
              style: {
                ...style,
                ...defaultStyle,
                ...transitionStyle[transitionStatus],
              },
              className,
              ref: nodeRef,
            },
            children
          );
        }}
      </RTGTransition>
    );
  }
);

export { Transition };
