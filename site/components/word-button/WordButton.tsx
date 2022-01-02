import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";
import { ButtonHoverTransitionCss, StylessButtonCss } from "../animate-button";

const StyledButton = styled.button`
  ${StylessButtonCss};
  ${ButtonHoverTransitionCss};
`;

const WordButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <StyledButton {...props} />;
};

export { WordButton };
