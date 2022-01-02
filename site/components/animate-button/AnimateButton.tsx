import React, { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";
import { FadeInTransition } from "../../../transitions/fade-in-transition";
import { useCSSStyle } from "../../../hooks";

const ButtonHoverTransitionCss = css`
  transition: transform 200ms, color 200ms;
  &:hover {
    color: #bdbdbd;
    transform: scale(0.97);
  }

  &:active {
    transform: scale(0.94);
    color: #737373;
  }
`;

const StylessButtonCss = css`
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
`;

const ButtonStyled = styled.button`
  ${StylessButtonCss};
  ${ButtonHoverTransitionCss};
  background-color: #343434;
  padding: 0.4rem 0.8rem;
  border-radius: 0.2rem;
`;

const AnimateButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  // eslint-disable-next-line
  children,
  ...props
}) => {
  const s = useCSSStyle(
    {
      marginTop: "3rem",
    },
    []
  );
  return (
    <div style={s}>
      <FadeInTransition delay={1500} to={1} from={0} in appear timeout={700}>
        <ButtonStyled {...props}>animate</ButtonStyled>;
      </FadeInTransition>
    </div>
  );
};

export { AnimateButton, StylessButtonCss, ButtonHoverTransitionCss };
