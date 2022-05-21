"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const transition_1 = require("../transition");
const ease_1 = require("../../ease");
const ScaleTransition = (0, react_1.forwardRef)(({ children, timeout, delay = "0", ["in"]: _in, from, ease = ease_1.Ease.ease, to, ...props }, outsideRef) => {
    const defaultStyle = (0, react_1.useMemo)(() => ({
        transform: `scale(${from})`,
        transition: `transform ${timeout}ms ${ease} ${delay}ms`,
    }), [from, timeout, delay]);
    const transitionStyle = (0, react_1.useMemo)(() => ({
        entered: {
            transform: `scale(${to})`,
        },
        entering: {
            transform: `scale(${to})`,
        },
    }), [to]);
    return ((0, jsx_runtime_1.jsx)(transition_1.Transition, { ...props, in: _in, ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, children: children }, void 0));
});
exports.ScaleTransition = ScaleTransition;
ScaleTransition.displayName = "ScaleTransition";
