import { MarginThemeType } from "./MarginTheme.type";
import { Theme } from "../theme";

const marginTheme: MarginThemeType = {
  0: "0px",
  1: "1px",
  2: "0.125rem",
  3: "0.25rem",
  4: "0.375rem",
  5: "0.5rem",
  6: "0.625rem",
  7: "0.75rem",
  8: "0.875rem",
  9: "1rem",
  10: "1.25rem",
  11: "1.5rem",
  12: "1.75rem",
  13: "2rem",
  14: "2.25rem",
  15: "2.5rem",
  16: "2.75rem",
  17: "3rem",
};

const margin =
  (value: keyof MarginThemeType) =>
  ({ theme }: { theme: Theme }) => {
    return theme.margin[value];
  };

export { marginTheme, margin };
