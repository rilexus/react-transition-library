import React, { FC, ForwardedRef, useCallback, useEffect, useRef } from "react";
import { usePressState, useCallbackRef, PRESS_TYPES } from "../../hooks";
import { Ease } from "../../ease";
import { ScaleDownTransition } from "../scale-down-transition";

type Props = {
  timeout: number;
  from: number;
  ease?: Ease;
  to: number;
  animate?: boolean;
  onPress?: (ref: ForwardedRef<HTMLDivElement>) => void;
  onPressStart?: (ref: ForwardedRef<HTMLDivElement>) => void;
  onPressed?: (ref: ForwardedRef<HTMLDivElement>) => void;
  delay?: number;
};

const TouchScaleTransition: FC<Props> = ({
  ease = Ease.ease,
  children,
  animate = true,
  timeout = 400,
  from = 1,
  to = 0.9,
  delay = 0,
  onPress,
  onPressed,
  onPressStart,
}) => {
  const ref = useRef(null);
  const pressState = usePressState(ref);

  const onPressRef = useCallbackRef(onPress);
  const onPressStartRef = useCallbackRef(onPressStart);
  const onPressEndRef = useCallbackRef(onPressed);

  useEffect(() => {
    if (pressState === PRESS_TYPES.pressstart) {
      onPressStartRef.current && onPressStartRef.current(ref);
    }
    if (pressState === PRESS_TYPES.pressend) {
      onPressEndRef.current && onPressEndRef.current(ref);
    }
  }, [pressState, onPressStartRef, onPressEndRef, ref]);

  const handlePress = useCallback(() => {
    onPressRef.current && onPressRef.current(ref);
  }, [onPressRef, ref]);

  return (
    <ScaleDownTransition
      ref={ref}
      onEntered={handlePress}
      ease={ease}
      delay={delay}
      in={
        animate &&
        (pressState === PRESS_TYPES.pressend ||
          pressState === PRESS_TYPES.press)
      }
      timeout={timeout}
      from={from}
      to={to}
    >
      {children}
    </ScaleDownTransition>
  );
};
export { TouchScaleTransition };
