import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { FadeInExample, FadeOutExample, BackdropExample } from "./examples";
import { ResetCssStyled } from "./ResetCss.styled";
import { Li, Ul } from "./components";
import styled from "styled-components";
import { typographyBoldLG } from "./theme";
const navbarLeftWidth = 150;
const navbarLeftZIndex = 100;

const AnimationTypeTitle = styled.h5`
  ${typographyBoldLG};
`;

const NavbarLeft = () => {
  return (
    <nav
      style={{
        zIndex: navbarLeftZIndex,
        position: "fixed",
        top: 0,
        left: 0,
        overflowX: "hidden",
        height: "100vh",
        width: `${navbarLeftWidth}px`,
      }}
    >
      <Ul>
        <Li>
          <Link to={"/"}>Home</Link>
        </Li>
        <Li>
          <AnimationTypeTitle>Filter</AnimationTypeTitle>
          <ul>
            <Li>
              <Link to={"/backdrop"}>Backdrop</Link>
            </Li>
          </ul>
        </Li>
        <Li>
          <AnimationTypeTitle>Fade</AnimationTypeTitle>
          <ul>
            <Li>
              <Link to={"/fadein"}>Fade in</Link>
            </Li>
            <Li>
              <Link to={"/fadeout"}>Fade out</Link>
            </Li>
          </ul>
        </Li>
      </Ul>
    </nav>
  );
};

const Home = () => {
  return (
    <div>
      <h1>React Transitions Library</h1>
    </div>
  );
};

const Page: FC = ({ children }) => {
  return (
    <div
      style={{
        paddingLeft: `${navbarLeftWidth + 20}px`,
      }}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ResetCssStyled />
      <NavbarLeft />
      <div
        style={{
          position: "relative",
        }}
      >
        <Page>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/backdrop"} element={<BackdropExample />} />
            <Route path={"/fadein"} element={<FadeInExample />} />
            <Route path={"/fadeout"} element={<FadeOutExample />} />
            <Route path={"*"} element={<Navigate to={"/"} />} />
          </Routes>
        </Page>
      </div>
    </div>
  );
};
export { App };
