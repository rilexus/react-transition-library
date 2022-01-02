import React, { useEffect, useRef, useState } from "react";
import { WordButton } from "../word-button";
import { Code } from "../code";
import { FadeInTransition } from "../../../transitions/fade-in-transition";
import { FadeOutTransition } from "../../../transitions/fade-out-transition";

const CodeSnippet = ({ code }: { code: string }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<any>();
  const heightRef = useRef<any>(0);

  useEffect(() => {
    heightRef.current = ref.current.clientHeight;
  }, [ref]);

  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <WordButton onClick={() => setVisible((v) => !v)}>
          {visible ? "Hide" : "Show"} Snippet
        </WordButton>
      </div>
      <div
        style={{
          height: "1px",
          margin: "10px 0",
          backgroundColor: "#383838",
        }}
      />
      <div
        style={{
          transition: "height 1200ms",
          overflowY: "hidden",
          height: visible ? `${heightRef.current}px` : "0px",
        }}
      >
        <FadeInTransition from={0} in={visible} to={1} timeout={400}>
          <FadeOutTransition from={1} to={0} in={!visible} timeout={400}>
            <Code jsx={code} ref={ref} />
          </FadeOutTransition>
        </FadeInTransition>
      </div>
    </div>
  );
};

export { CodeSnippet };
