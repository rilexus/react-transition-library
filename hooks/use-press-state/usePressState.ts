import { useState } from "react";
import { usePress } from "../use-press";
import { PRESS_TYPES } from "../use-press/usePress";

const usePressState = (ref: any) => {
  const [states, setStates] = useState<PRESS_TYPES>(PRESS_TYPES.idle);

  usePress((type: any) => {
    setStates((s) => {
      return type;
    });
  }, ref);

  return states;
};
export { usePressState };
