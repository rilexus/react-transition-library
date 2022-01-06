import { MutableRefObject, useEffect, useRef } from "react";

function useMouseEnter<HTMLElementType extends HTMLElement | undefined>(
  ref: MutableRefObject<HTMLElementType>,
  callback: () => void
) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter", callbackRef.current);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mouseenter", callbackRef.current);
      }
    };
  }, [ref, callbackRef]);
}

export { useMouseEnter };
