"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMouseLeave = void 0;
const react_1 = require("react");
function useMouseLeave(ref, callback) {
    const callbackRef = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(() => {
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
exports.useMouseLeave = useMouseLeave;
