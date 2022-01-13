import { FadeInTransition } from "../../../transitions/fade-in-transition";
import React, { FC, HTMLAttributes, useCallback } from "react";
import {
  BlurTransition,
  ScaleTransition,
  ZoomTransition,
} from "../../../transitions";
import { Ease } from "../../../ease";
import { useCSSStyle } from "../../../hooks";
import {
  Blur,
  useBlurContext,
  VerticalDivider,
  WordButton,
} from "../../components";
import { RTLTitle } from "./components";

const TitleTransition = ({ children, ...props }: any) => {
  return (
    <BlurTransition {...props} timeout={700} to={"0px"} from={"10px"}>
      <FadeInTransition {...props} from={0} timeout={700} to={1}>
        <ZoomTransition
          {...props}
          from={0.8}
          to={1}
          timeout={1500}
          ease={Ease.easeOut}
        >
          {children}
        </ZoomTransition>
      </FadeInTransition>
    </BlurTransition>
  );
};

const Border: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const s = useCSSStyle(
    {
      border: "1px solid #2a2a2a",
      padding: "1rem 2rem",
      borderRadius: ".75rem",
      ...props.style,
    },
    []
  );
  return (
    <div {...props} style={s}>
      {children}
    </div>
  );
};

const CopyArea: FC<{ value: string } & HTMLAttributes<HTMLDivElement>> = ({
  children,
  value,
  ...props
}) => {
  const handleClick = useCallback(async () => {
    await navigator.clipboard.writeText(value);
  }, [value]);
  return (
    <Border {...props}>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>{children}</div>
        <div
          style={{
            marginLeft: "2rem",
          }}
        >
          <WordButton onClick={handleClick}>copy</WordButton>
        </div>
      </div>
    </Border>
  );
};

const Home = () => {
  const { blur, focus, blurred } = useBlurContext();
  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <TitleTransition appear delay={1000} in>
          <div
            style={{
              margin: "0 auto",
              maxWidth: "900px",
            }}
          >
            <div
              style={{
                marginTop: "20vh",
              }}
            >
              <Blur name={"title"}>
                <RTLTitle />
              </Blur>
            </div>
          </div>
        </TitleTransition>

        <TitleTransition appear delay={1700} in>
          <div
            style={{
              marginTop: "10vh",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            <section
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <h2
                  style={{
                    fontWeight: "300",
                    fontSize: "1.5rem",
                  }}
                >
                  <Blur name={"installation"}>Installation</Blur>
                </h2>
                <VerticalDivider />
                <div>
                  <pre>
                    <code>
                      <Blur name={"npm"}>
                        <ScaleTransition
                          timeout={400}
                          in={blurred["yarn"]}
                          from={1}
                          to={1.1}
                        >
                          <CopyArea
                            onMouseEnter={() => {
                              blur([
                                "title",
                                "navigation",
                                "yarn",
                                "installation",
                              ]);
                              // setOver(true);
                            }}
                            onMouseLeave={() => {
                              focus([
                                "title",
                                "navigation",
                                "yarn",
                                "installation",
                              ]);
                              // setOver(false);
                            }}
                            value={
                              "npm install react-transitions-library react-transition-group"
                            }
                          >
                            npm install react-transitions-library
                            react-transition-group
                          </CopyArea>
                        </ScaleTransition>
                      </Blur>
                      <VerticalDivider />
                      <Blur name={"yarn"}>
                        <ScaleTransition
                          timeout={700}
                          in={blurred["npm"]}
                          from={1}
                          to={1.1}
                        >
                          <CopyArea
                            onMouseEnter={() => {
                              blur([
                                "title",
                                "navigation",
                                "npm",
                                "installation",
                              ]);
                              // setOverYarn(true);
                            }}
                            onMouseLeave={() => {
                              focus([
                                "title",
                                "navigation",
                                "npm",
                                "installation",
                              ]);
                              // setOverYarn(false);
                            }}
                            value={
                              "yarn add react-transitions-library react-transition-group"
                            }
                          >
                            yarn add react-transitions-library
                            react-transition-group
                          </CopyArea>
                        </ScaleTransition>
                      </Blur>
                    </code>
                  </pre>
                </div>
              </div>
            </section>
            <section>
              <div
                style={{
                  marginTop: "2rem",
                }}
              >
                <a
                  href="https://www.stanislavpanchenko.de"
                  style={{
                    fontSize: ".8rem",
                  }}
                >
                  by Stanislav Panchenko
                </a>
              </div>
            </section>
          </div>
        </TitleTransition>
      </div>
    </div>
  );
};

export { Home };
