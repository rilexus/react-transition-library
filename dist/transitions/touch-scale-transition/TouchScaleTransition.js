"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchScaleTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const ease_1 = require("../../ease");
const scale_down_transition_1 = require("../scale-down-transition");
const TouchScaleTransition = ({ ease = ease_1.Ease.ease, children, animate = true, timeout = 400, from = 1, to = 0.9, delay = 0, onPress, onPressed, onPressStart, }) => {
    const ref = (0, react_1.useRef)(null);
    const pressState = (0, hooks_1.usePressState)(ref);
    const onPressRef = (0, hooks_1.useCallbackRef)(onPress);
    const onPressStartRef = (0, hooks_1.useCallbackRef)(onPressStart);
    const onPressEndRef = (0, hooks_1.useCallbackRef)(onPressed);
    (0, react_1.useEffect)(() => {
        if (pressState === hooks_1.PRESS_TYPES.pressstart) {
            onPressStartRef.current && onPressStartRef.current(ref);
        }
        if (pressState === hooks_1.PRESS_TYPES.pressend) {
            onPressEndRef.current && onPressEndRef.current(ref);
        }
    }, [pressState, onPressStartRef, onPressEndRef, ref]);
    const handlePress = (0, react_1.useCallback)(() => {
        onPressRef.current && onPressRef.current(ref);
    }, [onPressRef, ref]);
    return ((0, jsx_runtime_1.jsx)(scale_down_transition_1.ScaleDownTransition, { ref: ref, onEntered: handlePress, ease: ease, delay: delay, in: animate &&
            (pressState === hooks_1.PRESS_TYPES.pressend ||
                pressState === hooks_1.PRESS_TYPES.press), timeout: timeout, from: from, to: to, children: children }, void 0));
};
exports.TouchScaleTransition = TouchScaleTransition;
