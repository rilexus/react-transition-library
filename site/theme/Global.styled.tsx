import { createGlobalStyle } from "styled-components";
import { backgroundColor, fontFamily, textColor } from "./getters";

const GlobalCss = createGlobalStyle`
  html {
    font-family: ${fontFamily("sans")};
    background-color: ${backgroundColor()};
  }
  a, p, h1, h2, h3, h4, h5, h6, code {
    color: ${textColor()};
  }
  a {
    color: #9a9a9a;
    text-decoration: auto;
	  &:hover {
      text-decoration: underline;
	  };
  }
  p {
	  font-size: 1.2rem;
	  line-height: 1.2;
  }
  i {
	  font-style: italic;
  }
`;

export { GlobalCss };
