import { fontBoldCss } from "../font/bold.css";
import {
  text2XLCss,
  text3XLCss,
  text4XLCss,
  text5XLCss,
  text6XLCss,
  text7XLCss,
  text8XLCss,
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

const typographyBold4XL = css`
  ${fontBoldCss};
  ${text4XLCss};
`;
const typographyBold5XL = css`
  ${fontBoldCss};
  ${text5XLCss};
`;

const typographyBold6XL = css`
  ${fontBoldCss};
  ${text6XLCss};
`;

const typographyBold7XL = css`
  ${fontBoldCss};
  ${text7XLCss};
`;

const typographyBold8XL = css`
  ${fontBoldCss};
  ${text8XLCss};
`;

export {
  typographyBoldLG,
  typographyBoldBase,
  typographyBoldXS,
  typographyBoldXL,
  typographyBoldSM,
  typographyBold3XL,
  typographyBold2XL,
  typographyBold4XL,
  typographyBold5XL,
  typographyBold6XL,
  typographyBold7XL,
  typographyBold8XL,
};
