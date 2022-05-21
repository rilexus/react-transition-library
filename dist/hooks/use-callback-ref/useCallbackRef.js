"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCallbackRef = void 0;
const react_1 = require("react");
const useCallbackRef = (callback) => {
    const ref = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(() => {
        ref.current = callback;
    }, [callback]);
    return ref;
};
exports.useCallbackRef = useCallbackRef;
