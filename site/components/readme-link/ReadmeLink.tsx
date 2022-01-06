import React from "react";
import { A } from "../a";
import { repoTransitionsURL } from "../../../env";
import { FadeInTransition } from "../../../transitions";

const ReadmeLink = ({ link }: { link: string }) => {
  return (
    <FadeInTransition in appear delay={2000} from={0} to={1} timeout={1000}>
      <A href={`${repoTransitionsURL}${link}`}>See on GitHub</A>
    </FadeInTransition>
  );
};

export { ReadmeLink };
