import { Link, Route, Routes } from "react-router-dom";
import React, { FC } from "react";
import { FadeInExample, FadeOutExample, BackdropExample } from "./examples";

const navbarLeftWidth = 150;
const navbarLeftZIndex = 100;

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
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/backdrop"}>Backdrop</Link>
        </li>
        <li>
          <Link to={"/fadein"}>Fade in</Link>
        </li>
        <li>
          <Link to={"/fadeout"}>Fade out</Link>
        </li>
      </ul>
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
      <NavbarLeft />
      <div
        style={{
          position: "relative",
        }}
      >
        <Page>
          <Routes>
            <Route path={"/backdrop"} element={<BackdropExample />} />
            <Route path={"/fadein"} element={<FadeInExample />} />
            <Route path={"/fadeout"} element={<FadeOutExample />} />
            <Route path={"/"} element={<Home />} />
          </Routes>
        </Page>
      </div>
    </div>
  );
};
export { App };
