import { fontBoldCss } from "../font/bold.css";
import {
  text2XLCss,
  text3XLCss,
  textBaseCss,
  textLGCss,
  textSMCss,
  textXLCss,
  textXSCss,
} from "../text";
import { css } from "styled-components";

const typographyBoldXS = css`
  ${fontBoldCss};
  ${textXSCss};
`;

const typographyBoldSM = css`
  ${fontBoldCss};
  ${textSMCss};
`;

const typographyBoldBase = css`
  ${fontBoldCss};
  ${textBaseCss};
`;
const typographyBoldLG = css`
  ${fontBoldCss};
  ${textLGCss};
`;
const typographyBoldXL = css`
  ${fontBoldCss};
  ${textXLCss};
`;
const typographyBold2XL = css`
  ${fontBoldCss};
  ${text2XLCss};
`;
const typographyBold3XL = css`
  ${fontBoldCss};
  ${text3XLCss};
`;
export {
  typographyBoldLG,
  typographyBoldBase,
  typographyBoldXS,
  typographyBoldXL,
  typographyBoldSM,
  typographyBold3XL,
  typographyBold2XL,
};
