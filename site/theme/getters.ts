import { Theme } from "./theme";

const backgroundColor = () => {
  return ({ theme }: { theme: Theme }) => {
    const mode = theme.colors.mode;
    return theme.colors.background[mode];
  };
};

const textColor = () => {
  return ({ theme }: { theme: Theme }) => {
    const mode = theme.colors.mode;
    return theme.colors.text[mode];
  };
};

const fontFamily = (type: "sans" | "mono" | "serif" = "sans") => {
  return ({ theme }: { theme: Theme }) => {
    return theme.font.family[type];
  };
};

export { textColor, backgroundColor, fontFamily };
