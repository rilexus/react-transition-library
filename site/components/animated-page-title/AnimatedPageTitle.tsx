import React, { FC } from "react";
import { FadeInTransition } from "../../../transitions/fade-in-transition";
import { PageTitle } from "../page-title";

const AnimatedPageTitle: FC = ({ children }) => {
  return (
    <FadeInTransition in appear to={1} from={0} timeout={999}>
      <PageTitle>{children}</PageTitle>
    </FadeInTransition>
  );
};

export { AnimatedPageTitle };
