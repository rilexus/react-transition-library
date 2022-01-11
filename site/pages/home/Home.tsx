import { FadeInTransition } from "../../../transitions/fade-in-transition";
import React, { FC, HTMLAttributes, useCallback } from "react";
import styled from "styled-components";
import { typographyBold7XL } from "../../theme";
import { TransitionGroup } from "react-transition-group";
import { BlurTransition, ZoomTransition } from "../../../transitions";
import { Ease } from "../../../ease";
import { useCSSStyle } from "../../../hooks";
import { VerticalDivider, WordButton } from "../../components";

const Title = styled.h1`
  ${typographyBold7XL}
`;

const TitleTransition = ({ children, ...props }: any) => {
  return (
    <BlurTransition {...props} timeout={700} to={"0px"} from={"10px"}>
      <FadeInTransition {...props} from={0} timeout={1000} to={1}>
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

const CopyArea: FC<{ value: string }> = ({ children, value }) => {
  const handleClick = useCallback(async () => {
    await navigator.clipboard.writeText(value);
  }, [value]);
  return (
    <Border>
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
  return (
    <div
      style={{
        paddingTop: "20vh",
      }}
    >
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <TransitionGroup>
            <TitleTransition appear delay={1000}>
              <Title>
                <div>React</div>
                <div>Transitions Library</div>
              </Title>
            </TitleTransition>
            <TitleTransition appear delay={1700}>
              <div
                style={{
                  marginTop: "3rem",
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
                        fontSize: "2rem",
                      }}
                    >
                      Installation
                    </h2>
                    <VerticalDivider />
                    <div>
                      <pre>
                        <code>
                          <CopyArea
                            value={
                              "npm install react-transitions-library react-transition-group"
                            }
                          >
                            npm install react-transitions-library
                            react-transition-group
                          </CopyArea>
                          <VerticalDivider />
                          <CopyArea
                            value={
                              "yarn add react-transitions-library react-transition-group"
                            }
                          >
                            yarn add react-transitions-library
                            react-transition-group
                          </CopyArea>
                        </code>
                      </pre>
                    </div>
                  </div>
                </section>
              </div>
            </TitleTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export { Home };
