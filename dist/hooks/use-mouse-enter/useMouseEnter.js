"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMouseEnter = void 0;
const react_1 = require("react");
function useMouseEnter(ref, callback) {
    const callbackRef = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(() => {
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
exports.useMouseEnter = useMouseEnter;
