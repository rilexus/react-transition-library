import { useEffect, useRef } from "react";
function useMouseEnter(ref, callback) {
    var callbackRef = useRef(callback);
    useEffect(function () {
        if (ref.current) {
            ref.current.addEventListener("mouseenter", callbackRef.current);
        }
        return function () {
            if (ref.current) {
                ref.current.removeEventListener("mouseenter", callbackRef.current);
            }
        };
    }, [ref, callbackRef]);
}
export { useMouseEnter };
