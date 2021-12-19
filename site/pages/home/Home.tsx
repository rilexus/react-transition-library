import { FadeInTransition } from "../../../transitions/fade-in-transition";
import React from "react";
import styled from "styled-components";
import { typographyBold7XL } from "../../theme";
import { TransitionGroup } from "react-transition-group";
import { BlurTransition, ZoomTransition } from "../../../transitions";
import { Ease } from "../../../ease";

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
                <section>
                  <h2>
                    <i>Installation</i>
                  </h2>
                  <pre>
                    <code>
                      <div>
                        npm install react-transitions-library
                        react-transition-group
                      </div>
                      <div>
                        yarn add react-transitions-library
                        react-transition-group
                      </div>
                    </code>
                  </pre>
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
