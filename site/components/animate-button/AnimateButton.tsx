import React, { ButtonHTMLAttributes, FC } from "react";

const AnimateButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  // eslint-disable-next-line
  children,
  ...props
}) => {
  return <button {...props}>animate</button>;
};

export { AnimateButton };
