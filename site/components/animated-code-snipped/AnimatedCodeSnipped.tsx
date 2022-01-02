import { FadeInTransition } from "../../../transitions";
import { CodeSnippet } from "../code-snipped";
import React from "react";

const AnimatedCodeSnipped = ({ code }: { code: string }) => {
  return (
    <div
      style={{
        marginTop: "8rem",
        padding: "2rem",
        textAlign: "left",
      }}
    >
      <FadeInTransition in appear delay={2000} timeout={700} from={0} to={1}>
        <CodeSnippet code={code} />
      </FadeInTransition>
    </div>
  );
};

export { AnimatedCodeSnipped };
