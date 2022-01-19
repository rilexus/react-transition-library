import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import { TransitionProps } from "../transitions/transition/TransitionProps.type";
import { mergeRefs } from "./mergeRefs";

function createEventTransition<
  Element extends HTMLElement,
  Props extends { timeout: number } & TransitionProps
>(type: string, render: ForwardRefRenderFunction<Element, Props>) {
  const Component = forwardRef<Element, Props>((props, outsideRef) => {
    const ref = useRef<Element>(null);
    const [_in, setIn] = useState<boolean>(false);
    const timeoutRef = useRef<any>();

    useEffect(() => {
      return () => {
        // cancel timout on unmount
        clearTimeout(timeoutRef.current);
      };
    }, [timeoutRef]);

    useEffect(() => {
      const current = ref.current;

      const handle = () => {
        // set _in to "true" and after timeout to "false"
        setIn((i) => {
          timeoutRef.current = setTimeout(() => {
            setIn((i) => !i);
          }, props.timeout);
          return !i;
        });
      };

      // listen for events on ref
      current?.addEventListener(type, handle);
      return () => {
        current?.removeEventListener(type, handle);
      };
    }, [ref, props.timeout]);

    return render({ ...props, in: _in }, mergeRefs([ref, outsideRef]));
  });

  Component.displayName = "EventTransition";

  return Component;
}
export { createEventTransition };
