import React, { useEffect, useState } from "react";
import { ShakeOutTransition } from "../../../transitions/shake-out-transition";
import { ShakeInTransition } from "../../../transitions/shake-in-transition";
import {
  AnimateButton,
  AnimatedPageTitle,
  FullPageCenter,
  TextCenter,
} from "../../components";

const ShakeInPage = () => {
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
      <div>
        <ShakeInTransition
          in={show}
          delay={delay}
          timeout={timeout}
          from={"0px"}
          to={"2rem"}
        >
          <ShakeOutTransition
            in={show}
            delay={delay}
            timeout={timeout}
            from={"0px"}
            to={"2rem"}
          >
            <AnimatedPageTitle>Shake</AnimatedPageTitle>
          </ShakeOutTransition>
        </ShakeInTransition>
        <TextCenter>
          <AnimateButton onClick={() => toggle((t) => !t)} />
        </TextCenter>
      </div>
    </FullPageCenter>
  );
};

export { ShakeInPage };
