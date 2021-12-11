import { useEffect, useRef } from "react";

const useCallbackRef = (callback: any) => {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  return ref;
};

export { useCallbackRef };
