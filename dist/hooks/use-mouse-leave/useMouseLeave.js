import { useEffect, useRef } from "react";
function useMouseLeave(ref, callback) {
    var callbackRef = useRef(callback);
    useEffect(function () {
        if (ref.current) {
            ref.current.addEventListener("mouseleave", callbackRef.current);
        }
        return function () {
            if (ref.current) {
                ref.current.removeEventListener("mouseleave", callbackRef.current);
            }
        };
    }, [ref, callbackRef]);
}
export { useMouseLeave };
