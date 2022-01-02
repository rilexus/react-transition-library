import { CodeBlock, irBlack } from "react-code-blocks";
import React, { forwardRef } from "react";

const Code = forwardRef(({ jsx }: { jsx: string }, ref) => {
  return (
    <div ref={ref as any}>
      <CodeBlock
        theme={irBlack}
        text={jsx}
        language={"typescript"}
        showLineNumbers={false}
        startingLineNumber={1}
        wrapLines
      />
    </div>
  );
});
Code.displayName = "Code";
export { Code };
