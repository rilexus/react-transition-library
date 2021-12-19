import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { ResetCssStyled } from "./ResetCss.styled";
import { Li, Ul } from "./components";
import styled from "styled-components";
import { typographyBoldLG } from "./theme";
import {
  BackdropExample,
  FadeInExample,
  FadeOutExample,
  Home,
  ZoomInPage,
  ZoomOutPage,
} from "./pages";
import { NavbarLeft } from "./components/navbar-left";
import { navbarLeftWidth } from "./components/consts";

const AnimationTypeTitle = styled.h5`
  ${typographyBoldLG};
`;

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
      <NavbarLeft>
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
            <AnimationTypeTitle>Zooming</AnimationTypeTitle>
            <Ul>
              <Li>
                <Link to={"/zoomin"}>Zoom in</Link>
              </Li>
              <Li>
                <Link to={"/zoomout"}>Zoom out</Link>
              </Li>
            </Ul>
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
      </NavbarLeft>
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
            <Route path={"/zoomin"} element={<ZoomInPage />} />
            <Route path={"/zoomout"} element={<ZoomOutPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Page>
      </div>
    </div>
  );
};

export { App };
