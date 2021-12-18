var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef } from "react";
import { usePressState, useCallbackRef, PRESS_TYPES } from "../../hooks";
import { Ease } from "../../ease";
import { ScaleDownTransition } from "../scale-down-transition";
var TouchScaleTransition = function (_a) {
    var _b = _a.ease, ease = _b === void 0 ? Ease.ease : _b, children = _a.children, _c = _a.animate, animate = _c === void 0 ? true : _c, _d = _a.timeout, timeout = _d === void 0 ? 400 : _d, _e = _a.from, from = _e === void 0 ? 1 : _e, _f = _a.to, to = _f === void 0 ? 0.9 : _f, _g = _a.delay, delay = _g === void 0 ? 0 : _g, onPress = _a.onPress, onPressed = _a.onPressed, onPressStart = _a.onPressStart;
    var ref = useRef(null);
    var pressState = usePressState(ref);
    var onPressRef = useCallbackRef(onPress);
    var onPressStartRef = useCallbackRef(onPressStart);
    var onPressEndRef = useCallbackRef(onPressed);
    useEffect(function () {
        if (pressState === PRESS_TYPES.pressstart) {
            onPressStartRef.current && onPressStartRef.current(ref);
        }
        if (pressState === PRESS_TYPES.pressend) {
            onPressEndRef.current && onPressEndRef.current(ref);
        }
    }, [pressState, onPressStartRef, onPressEndRef, ref]);
    var handlePress = useCallback(function () {
        onPressRef.current && onPressRef.current(ref);
    }, [onPressRef, ref]);
    return (_jsx(ScaleDownTransition, __assign({ ref: ref, onEntered: handlePress, ease: ease, delay: delay, in: animate &&
            (pressState === PRESS_TYPES.pressend ||
                pressState === PRESS_TYPES.press), timeout: timeout, from: from, to: to }, { children: children }), void 0));
};
export { TouchScaleTransition };
