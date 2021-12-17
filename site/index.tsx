import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BackdropExample } from "./examples";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

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
            <Route path={"/"} element={<Home />} />
          </Routes>
        </Page>
      </div>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
