import styled from "styled-components";
import { typographyBold2XL } from "../../theme";
import { margin } from "../../theme/margin";

const PageTitle = styled.h1`
  ${typographyBold2XL};
  margin-bottom: ${margin(5)};
`;

export { PageTitle };
