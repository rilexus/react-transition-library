import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme, theme as defaultTheme } from "./theme";

const ThemeProvider: FC<{ theme?: Theme /* TODO: type theme */ }> = ({
  theme,
  ...props
}) => {
  return <StyledThemeProvider {...props} theme={theme || defaultTheme} />;
};

export { ThemeProvider };
