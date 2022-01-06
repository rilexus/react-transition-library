import React, { useEffect, useState } from "react";
import { ShakeTransition } from "../../../transitions";
import {
  AnimateButton,
  AnimatedPageTitle,
  FullPageCenter,
  ReadmeLink,
  TextCenter,
  VerticalDivider,
} from "../../components";

const ShakePage = () => {
  const [show, toggle] = useState(true);
  const [delay, setDelay] = useState(1000);
  const [timeout] = useState(1000);

  useEffect(() => {
    const time = setTimeout(() => {
      setDelay(0);
    }, timeout + delay);
    return () => {
      clearTimeout(time);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FullPageCenter>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <ShakeTransition
          in={show}
          delay={delay}
          timeout={timeout}
          from={"0px"}
          to={"2rem"}
        >
          <AnimatedPageTitle>Shake</AnimatedPageTitle>
        </ShakeTransition>
        <TextCenter>
          <AnimateButton onClick={() => toggle((t) => !t)} />
          <VerticalDivider />
          <ReadmeLink link={"/shake-transition/README.md"} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { ShakePage };
