import React, {
  ButtonHTMLAttributes,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { ButtonHoverTransitionCss, StylessButtonCss } from "../animate-button";
import { ScaleTransition } from "../../../transitions";

const StyledButton = styled.button`
  ${StylessButtonCss};
  ${ButtonHoverTransitionCss};
`;

const WordButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const [mouseUp, setMouseUp] = useState(false);
  const timeout = 150;
  const timoutRef = useRef<any>();
  useEffect(() => {
    if (mouseUp) {
      timoutRef.current = setTimeout(() => {
        setMouseUp(false);
      }, timeout);
    }
    return () => {
      clearTimeout(timoutRef.current);
    };
  }, [mouseUp]);

  return (
    <ScaleTransition from={1} to={1.4} in={mouseUp} timeout={timeout}>
      <StyledButton
        {...props}
        onMouseUp={() => {
          setMouseUp(true);
        }}
      />
    </ScaleTransition>
  );
};

export { WordButton };
