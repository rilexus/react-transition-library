import { MutableRefObject, useMemo, useRef, useState } from "react";
import { useMouseEnter } from "../use-mouse-enter";
import { useMouseLeave } from "../use-mouse-leave";

function useHover<HTMLElementType extends HTMLElement>(): {
  ref: MutableRefObject<HTMLElementType>;
  in: boolean;
} {
  const ref = useRef<HTMLElementType>();
  const [_in, _setIn] = useState(false);

  useMouseEnter(ref, () => {
    _setIn(true);
  });
  useMouseLeave(ref, () => {
    _setIn(false);
  });

  return useMemo(
    () =>
      ({ ref, in: _in } as {
        ref: MutableRefObject<HTMLElementType>;
        in: boolean;
      }),
    [ref, _in]
  );
}

export { useHover };
