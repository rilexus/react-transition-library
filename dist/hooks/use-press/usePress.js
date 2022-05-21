"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRESS_TYPES = exports.usePress = void 0;
const react_1 = require("react");
var PRESS_TYPES;
(function (PRESS_TYPES) {
    PRESS_TYPES["idle"] = "idle";
    PRESS_TYPES["pressstart"] = "pressstart";
    PRESS_TYPES["press"] = "press";
    PRESS_TYPES["pressend"] = "pressend";
})(PRESS_TYPES || (PRESS_TYPES = {}));
exports.PRESS_TYPES = PRESS_TYPES;
const usePress = (callback, ref) => {
    const [currentState, setCurrentState] = (0, react_1.useState)(PRESS_TYPES.idle);
    const callbackRef = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(() => {
        callbackRef.current = callback;
    }, [callback]);
    (0, react_1.useEffect)(() => {
        callbackRef.current(currentState);
    }, [currentState, callbackRef]);
    const pressStartRef = (0, react_1.useRef)();
    const pressRef = (0, react_1.useRef)();
    const pressedRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        const htmlElement = ref.current;
        const start = (event) => {
            const setStart = () => setCurrentState(PRESS_TYPES.pressstart);
            const setPress = () => setCurrentState(PRESS_TYPES.press);
            const setPressed = () => setCurrentState(PRESS_TYPES.pressend);
            pressStartRef.current = setTimeout(() => setStart(), 150);
            pressRef.current = setTimeout(() => setPress(), 200);
            pressedRef.current = setTimeout(() => setPressed(), 700);
        };
        const abort = (event) => {
            clearTimeout(pressStartRef.current);
            clearTimeout(pressRef.current);
            clearTimeout(pressedRef.current);
            const setIdle = () => setCurrentState(PRESS_TYPES.idle);
            setIdle();
        };
        if (htmlElement) {
            htmlElement.addEventListener("mousedown", start);
            htmlElement.addEventListener("touchstart", start);
            htmlElement.addEventListener("mouseup", abort);
            htmlElement.addEventListener("touchend", abort);
        }
        return () => {
            if (htmlElement) {
                htmlElement.removeEventListener("mousedown", start);
                htmlElement.removeEventListener("touchstart", start);
                htmlElement.removeEventListener("mouseup", abort);
                htmlElement.removeEventListener("touchend", abort);
            }
        };
    }, [ref, currentState, pressRef, pressStartRef, pressedRef]);
    return currentState;
};
exports.usePress = usePress;
