import { createElement, FC } from "react";

const TextCenter: FC<{ as?: string; [key: string]: any }> = ({
  children,
  as = "div",
  ...props
}) => {
  return createElement(
    as,
    {
      ...props,
      style: {
        ...props.style,
        textAlign: "center",
      },
    },
    children
  );
};

export { TextCenter };
