import React, { FC, useEffect, useState } from "react";
import { ShakeOutTransition } from "../../../transitions/shake-out-transition";
import { ShakeInTransition } from "../../../transitions/shake-in-transition";
import {
  AnimateButton,
  AnimatedCodeSnipped,
  AnimatedPageTitle,
  FullPageCenter,
  TextCenter,
} from "../../components";

type Props = {
  animate: boolean;
  from: string;
  to: string;
  delay: number;
  timeout: number;
};
const Shake: FC<Props> = ({
  animate,
  from = "0px",
  to = "2rem",
  timeout,
  children,
  ...props
}) => {
  return (
    <ShakeInTransition
      // shake when animate === true
      {...props}
      in={animate}
      from={from}
      to={to}
      timeout={timeout}
    >
      <ShakeOutTransition
        // shake when animate === false
        {...props}
        in={animate}
        to={to}
        from={from}
        timeout={timeout}
      >
        {children}
      </ShakeOutTransition>
    </ShakeInTransition>
  );
};

const ShakeCodeSnipped = () => {
  return (
    <AnimatedCodeSnipped
      code={`type Props = {
  animate: boolean;
  from: string;
  to: string;
  delay: number;
  timeout: number;
};
const Shake: FC<Props> = ({
  animate,
  from = "0px",
  to = "2rem",
  timeout,
  children,
  ...props
}) => {
  return (
    <ShakeInTransition
      // shake when animate === true
      {...props}
      in={animate}
      from={from}
      to={to}
      timeout={timeout}
    >
      <ShakeOutTransition
        // shake when animate === false
        {...props}
        in={animate}
        to={to}
        from={from}
        timeout={timeout}
      >
        {children}
      </ShakeOutTransition>
    </ShakeInTransition>
  );
};`}
    />
  );
};

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
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Shake
          animate={show}
          delay={delay}
          timeout={timeout}
          from={"0px"}
          to={"2rem"}
        >
          <AnimatedPageTitle>Shake</AnimatedPageTitle>
        </Shake>
        <TextCenter>
          <AnimateButton onClick={() => toggle((t) => !t)} />
        </TextCenter>
        <div>
          <div>
            <ShakeCodeSnipped />
          </div>
        </div>
      </div>
    </FullPageCenter>
  );
};

export { ShakeInPage };
