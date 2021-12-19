import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { ResetCssStyled } from "./ResetCss.styled";
import { Li, Ul } from "./components";
import styled from "styled-components";
import { GlobalCss, ThemeProvider, typographyBoldBase } from "./theme";
import {
  BackdropExample,
  BlurPage,
  FadeInExample,
  FadeOutExample,
  Home,
  ZoomInPage,
  ZoomOutPage,
} from "./pages";
import { NavbarLeft } from "./components/navbar-left";
import { navbarLeftWidth } from "./components/consts";
import { SlideYPage } from "./pages/slide-y";
import { margin } from "./theme/margin";

const AnimationTypeTitle = styled.h5`
  ${typographyBoldBase};
  margin-bottom: ${margin(2)};
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
    <ThemeProvider>
      <ResetCssStyled />
      <GlobalCss />
      <NavbarLeft>
        <Ul>
          <Li>
            <Link to={"/"}>Home</Link>
          </Li>
          <Li>
            <AnimationTypeTitle>Filter</AnimationTypeTitle>
            <Ul>
              <Li>
                <Link to={"/backdrop"}>Backdrop</Link>
              </Li>
              <Li>
                <Link to={"/blur"}>Blur</Link>
              </Li>
            </Ul>
          </Li>
          <Li>
            <AnimationTypeTitle>Slide</AnimationTypeTitle>
            <Ul>
              <Li>
                <Link to={"/slidey"}>Slide Y</Link>
              </Li>
            </Ul>
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
            <Route path={"/slidey"} element={<SlideYPage />} />
            <Route path={"/blur"} element={<BlurPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Page>
      </div>
    </ThemeProvider>
  );
};

export { App };
