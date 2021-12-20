import { useState } from "react";

type P = {
  toggle: () => void;
  register: {
    in: boolean;
    delay: number;
    timeout: number;
    onEntered: () => void;
  };
};

const usePageTitleAnimation = (): P => {
  const [state, setState] = useState({
    delay: 1000,
    timeout: 1000,
    in: true,
  });

  return {
    toggle: () => {
      setState((p) => ({ ...p, in: !p.in }));
    },
    register: {
      in: state.in,
      delay: state.delay,
      timeout: state.timeout,
      onEntered: () => {
        setState((p) => ({ ...p, delay: 0, timeout: 400 }));
      },
    },
  };
};
export { usePageTitleAnimation };
