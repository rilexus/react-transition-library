import React, { FC } from "react";
import { useCSSStyle } from "../../../hooks";

const FullPageCenter: FC = ({ children }) => {
  const s = useCSSStyle(
    {
      paddingTop: "40vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    []
  );

  return <div style={s}>{children}</div>;
};

export { FullPageCenter };
