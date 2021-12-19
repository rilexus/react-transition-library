import { marginTheme, MarginThemeType } from "./margin";
import { paddingTheme, PaddingTheme } from "./padding";

type Mode = "dark" | "light" | "main";

interface ThemedColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

interface Theme {
  margin: MarginThemeType;
  padding: PaddingTheme;
  font: {
    antialiased: string;
    italic: string;
    notItalic: string;
    family: {
      sans: string;
      serif: string;
      mono: string;
    };
    weight: {
      [key: string]: number;
    };
  };
  colors: {
    mode: Mode;
    primary: ThemedColor;
    secondary: ThemedColor;
    error: ThemedColor;
    warning: ThemedColor;
    info: ThemedColor;
    success: ThemedColor;
    text: ThemedColor;
    background: ThemedColor;
  };
}
const theme: Theme = {
  margin: marginTheme,
  padding: paddingTheme,
  colors: {
    mode: "dark",
    primary: {
      light: "",
      main: "",
      dark: "",
      contrastText: "white",
    },
    secondary: {
      light: "",
      main: "",
      dark: "",
      contrastText: "",
    },
    error: {
      light: "",
      main: "",
      dark: "",
      contrastText: "",
    },
    warning: {
      light: "",
      main: "",
      dark: "",
      contrastText: "",
    },
    info: {
      light: "",
      main: "",
      dark: "",
      contrastText: "",
    },
    success: {
      light: "",
      main: "",
      dark: "",
      contrastText: "",
    },
    background: {
      light: "",
      main: "",
      dark: "black",
      contrastText: "white",
    },
    text: {
      light: "",
      main: "",
      dark: "white",
      contrastText: "white",
    },
  },
  font: {
    antialiased: "antialiased",
    italic: "italic",
    notItalic: "normal",
    family: {
      sans: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
      serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },
    weight: {
      // thin
      thin: 100,

      // light
      ultralight: 100,
      extralight: 200,
      light: 300,

      // normal
      normal: 400,

      // medium
      medium: 500,

      // bold
      semibold: 600,
      bold: 700,
      extrabold: 800,

      // black
      black: 900,
    },
  },
};

export type { Mode, Theme };
export { theme };
