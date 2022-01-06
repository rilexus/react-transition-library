import { MutableRefObject, useEffect, useRef } from "react";

function useMouseLeave<HTMLElementType extends HTMLElement | undefined>(
  ref: MutableRefObject<HTMLElementType>,
  callback: () => void
) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseleave", callbackRef.current);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mouseleave", callbackRef.current);
      }
    };
  }, [ref, callbackRef]);
}
export { useMouseLeave };
