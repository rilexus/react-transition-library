import { Link, Navigate, Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { ResetCssStyled } from "./ResetCss.styled";
import { BlurContextProvider, Li, Ul } from "./components";
import styled, { css } from "styled-components";
import { GlobalCss, ThemeProvider, typographyBoldBase } from "./theme";
import {
  BackdropExample,
  BlurPage,
  FadeInExample,
  FadeInUpPage,
  FadeOutDownPage,
  FadeOutExample,
  Home,
  ScalePage,
  TranslatePage,
  ZoomInPage,
  ZoomOutPage,
  ShakePage,
  SlideYPage,
} from "./pages";
import { NavbarLeft } from "./components/navbar-left";
import { margin } from "./theme/margin";
import { Playground } from "./pages/playground";

const AnimationTypeTitleCss = css`
  ${typographyBoldBase};
  margin-bottom: ${margin(2)};
`;

const AnimationTypeTitle = styled.h5`
  ${AnimationTypeTitleCss};
`;

const H4 = styled.h4`
  ${AnimationTypeTitleCss};
`;

const Page: FC = ({ children }) => {
  return <div>{children}</div>;
};

const App = () => {
  return (
    <ThemeProvider>
      <BlurContextProvider>
        <ResetCssStyled />
        <GlobalCss />
        <NavbarLeft>
          <Ul>
            <Li>
              <div
                style={{
                  marginBottom: "1rem",
                }}
              >
                <Link to={"/"}>Home</Link>
              </div>
            </Li>
            <Li>
              <H4>Transitions</H4>
              <Ul>
                <Li>
                  <Link to={"/shake"}>Shake</Link>
                </Li>
                <Li>
                  <Link to={"/scale"}>Scale</Link>
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
                  <AnimationTypeTitle>Translate</AnimationTypeTitle>
                  <Ul>
                    <Li>
                      <Link to={"/translate"}>Translate</Link>
                    </Li>
                  </Ul>
                </Li>
                <Li>
                  <AnimationTypeTitle>Slide</AnimationTypeTitle>
                  <Ul>
                    <Li>
                      <Link to={"/slidey"}>SlideY</Link>
                    </Li>
                  </Ul>
                </Li>
                <Li>
                  <AnimationTypeTitle>Zoom</AnimationTypeTitle>
                  <Ul>
                    <Li>
                      <Link to={"/zoomin"}>ZoomIn</Link>
                    </Li>
                    <Li>
                      <Link to={"/zoomout"}>ZoomOut</Link>
                    </Li>
                  </Ul>
                </Li>
                <Li>
                  <AnimationTypeTitle>Fade</AnimationTypeTitle>
                  <ul>
                    <Li>
                      <Link to={"/fadein"}>FadeIn</Link>
                    </Li>
                    <Li>
                      <Link to={"/fadeout"}>FadeOut</Link>
                    </Li>
                    <Li>
                      <Link to={"/fadeinup"}>FadeInUp</Link>
                    </Li>
                    <Li>
                      <Link to={"/fadeoutdown"}>FadeOutDown</Link>
                    </Li>
                  </ul>
                </Li>
              </Ul>
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
              <Route path={"/playground"} element={<Playground />} />
              <Route path={"/backdrop"} element={<BackdropExample />} />
              <Route path={"/fadein"} element={<FadeInExample />} />
              <Route path={"/fadeout"} element={<FadeOutExample />} />
              <Route path="/fadeinup" element={<FadeInUpPage />} />
              <Route path="/fadeoutdown" element={<FadeOutDownPage />} />
              <Route path={"/zoomin"} element={<ZoomInPage />} />
              <Route path={"/zoomout"} element={<ZoomOutPage />} />
              <Route path={"/slidey"} element={<SlideYPage />} />
              <Route path={"/translate"} element={<TranslatePage />} />
              <Route path={"/blur"} element={<BlurPage />} />
              <Route path="/shake" element={<ShakePage />} />
              <Route path="/scale" element={<ScalePage />} />
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
          </Page>
        </div>
      </BlurContextProvider>
    </ThemeProvider>
  );
};

export { App };
