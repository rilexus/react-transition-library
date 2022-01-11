import { FadeInTransition } from "../../../transitions/fade-in-transition";
import React, { FC, HTMLAttributes, useCallback, useState } from "react";
import styled from "styled-components";
import { typographyBold7XL } from "../../theme";
import { TransitionGroup } from "react-transition-group";
import { BlurTransition, ZoomTransition } from "../../../transitions";
import { Ease } from "../../../ease";
import { useCSSStyle } from "../../../hooks";
import { VerticalDivider, WordButton } from "../../components";
import { v4 as uuidv4 } from "uuid";

const Title = styled.h1`
  ${typographyBold7XL};
  font-size: 10rem;
  color: inherit;
  // padding: 1rem;
  // text-rendering: optimizeLegibility
`;

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
const Styled = styled.span`
  font-variant: contextual;
  background-image: url(${({ url }) => url});
  background-color: ${({ url }) => (url ? "transparent" : "black")};
  display: inline-block;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-size: cover;
  background-position: center center;
`;
const TextOverlay: FC = ({ children, url }) => {
  return <Styled url={url}>{children}</Styled>;
};

const OverlayChildren = styled.div`
  display: grid;
  & > * {
    grid-area: 1/1;
  }
`;

const Home = () => {
  const [hoverIndex, setHoerIndex] = useState(0);

  const urls = [
    "https://media.giphy.com/media/l0MYuXX9btbEsA2S4/giphy.gif",
    "https://media.giphy.com/media/l0CLUrZiblFUBMMrC/giphy.gif",
    "https://media.giphy.com/media/FOdT4x8rHYAqQ/giphy.gif",
    "https://media.giphy.com/media/2bXyklhc7qQv0dTVXr/giphy.gif",
    "https://media.giphy.com/media/sQ5jimwRnCqkw/giphy.gif",
    "https://media.giphy.com/media/5xtDarBIj5VKfNRJt8k/giphy.gif",
    "https://media.giphy.com/media/5ciuhhe0rQva8/giphy.gif",
  ];
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
              <div
                style={{
                  margin: "0 auto",
                  maxWidth: "900px",
                }}
              >
                <div>
                  <OverlayChildren>
                    <TextOverlay url={urls[hoverIndex]}>
                      <Title>
                        React <br />
                        Transitions Library
                      </Title>
                    </TextOverlay>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {urls.map((_, idx) => {
                        return (
                          <div
                            key={uuidv4()}
                            onMouseEnter={() => {
                              setHoerIndex(idx);
                            }}
                            style={{
                              flexGrow: 1,
                            }}
                          />
                        );
                      })}
                    </div>
                  </OverlayChildren>
                </div>
              </div>
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
                        fontSize: "1.5rem",
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
