import { SyntheticEvent, useEffect, useRef, useState } from "react";

enum PRESS_TYPES {
  idle = "idle",
  pressstart = "pressstart",
  press = "press",
  pressend = "pressend",
}

const usePress = (callback: any, ref: any): PRESS_TYPES => {
  const [currentState, setCurrentState] = useState<PRESS_TYPES>(
    PRESS_TYPES.idle
  );

  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    callbackRef.current(currentState);
  }, [currentState, callbackRef]);

  const pressStartRef = useRef<any>();
  const pressRef = useRef<any>();
  const pressedRef = useRef<any>();

  useEffect(() => {
    const htmlElement = ref.current;
    const start = (event: SyntheticEvent) => {
      const setStart = () => setCurrentState(PRESS_TYPES.pressstart);
      const setPress = () => setCurrentState(PRESS_TYPES.press);
      const setPressed = () => setCurrentState(PRESS_TYPES.pressend);

      pressStartRef.current = setTimeout(() => setStart(), 150);
      pressRef.current = setTimeout(() => setPress(), 200);
      pressedRef.current = setTimeout(() => setPressed(), 700);
    };

    const abort = (event: SyntheticEvent) => {
      clearTimeout(pressStartRef.current);
      clearTimeout(pressRef.current);
      clearTimeout(pressedRef.current);

      const setIdle = () => setCurrentState(PRESS_TYPES.idle);

      setIdle();
    };
    if (htmlElement) {
      htmlElement.addEventListener("mousedown", start);
      htmlElement.addEventListener("touchstart", start);

      htmlElement.addEventListener("mouseup", abort);
      htmlElement.addEventListener("touchend", abort);
    }

    return () => {
      if (htmlElement) {
        htmlElement.removeEventListener("mousedown", start);
        htmlElement.removeEventListener("touchstart", start);

        htmlElement.removeEventListener("mouseup", abort);
        htmlElement.removeEventListener("touchend", abort);
      }
    };
  }, [ref, currentState, pressRef, pressStartRef, pressedRef]);

  return currentState;
};

export { usePress, PRESS_TYPES };
