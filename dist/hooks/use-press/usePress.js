import { useEffect, useRef, useState } from "react";
var PRESS_TYPES;
(function (PRESS_TYPES) {
    PRESS_TYPES["idle"] = "idle";
    PRESS_TYPES["pressstart"] = "pressstart";
    PRESS_TYPES["press"] = "press";
    PRESS_TYPES["pressend"] = "pressend";
})(PRESS_TYPES || (PRESS_TYPES = {}));
var usePress = function (callback, ref) {
    var _a = useState(PRESS_TYPES.idle), currentState = _a[0], setCurrentState = _a[1];
    var callbackRef = useRef(callback);
    useEffect(function () {
        callbackRef.current = callback;
    }, [callback]);
    useEffect(function () {
        callbackRef.current(currentState);
    }, [currentState, callbackRef]);
    var pressStartRef = useRef();
    var pressRef = useRef();
    var pressedRef = useRef();
    useEffect(function () {
        var htmlElement = ref.current;
        var start = function (event) {
            var setStart = function () { return setCurrentState(PRESS_TYPES.pressstart); };
            var setPress = function () { return setCurrentState(PRESS_TYPES.press); };
            var setPressed = function () { return setCurrentState(PRESS_TYPES.pressend); };
            pressStartRef.current = setTimeout(function () { return setStart(); }, 150);
            pressRef.current = setTimeout(function () { return setPress(); }, 200);
            pressedRef.current = setTimeout(function () { return setPressed(); }, 700);
        };
        var abort = function (event) {
            clearTimeout(pressStartRef.current);
            clearTimeout(pressRef.current);
            clearTimeout(pressedRef.current);
            var setIdle = function () { return setCurrentState(PRESS_TYPES.idle); };
            setIdle();
        };
        if (htmlElement) {
            htmlElement.addEventListener("mousedown", start);
            htmlElement.addEventListener("touchstart", start);
            htmlElement.addEventListener("mouseup", abort);
            htmlElement.addEventListener("touchend", abort);
        }
        return function () {
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
export { usePress, PRESS_TYPES };
