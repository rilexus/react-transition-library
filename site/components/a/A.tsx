import styled, { css } from "styled-components";

const ACss = css`
  color: #bcbcbd;
  font-size: 1.1rem;
`;

const A = styled.a`
  ${ACss};
  position: relative;
  //&:after {
  //  -webkit-transition: left 200ms, opacity 200ms;
  //  transition: left 200ms, opacity 200ms;
  //  position: relative;
  //  opacity: 0;
  //  left: -1rem;
  //  content: " >";
  //}
  //&:hover:after {
  //  opacity: 1;
  //  left: 0rem;
  //}
`;
export { A, ACss };
