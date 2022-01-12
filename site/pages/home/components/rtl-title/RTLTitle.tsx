import React, { FC, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { typographyBold7XL } from "../../../../theme";

const Title = styled.h1`
  ${typographyBold7XL};
  font-size: 10rem;
  color: inherit;
  // padding: 1rem;
  // text-rendering: optimizeLegibility
`;

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

const RTLTitle = () => {
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
  );
};

export { RTLTitle };
