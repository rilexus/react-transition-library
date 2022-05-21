"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleDownTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Transition_1 = require("../transition/Transition");
const ScaleDownTransition = (0, react_1.forwardRef)(({ children, timeout, ease = "ease", transformOrigin = "center", delay = "0", from, to, ...props }, outsideRef) => {
    const transitionStyle = (0, react_1.useMemo)(() => ({
        entered: {
            transform: `scale(${to})`,
        },
        entering: {
            transform: `scale(${to})`,
        },
        exiting: {
            transform: `scale(${from})`,
        },
        exited: {
            transform: `scale(${from})`,
        },
    }), [from, to]);
    const defaultStyle = (0, react_1.useMemo)(() => ({
        willChange: "transform",
        transformOrigin: transformOrigin,
        transitionTimingFunction: ease,
        transitionDelay: `${delay}ms`,
        transition: `transform ${timeout}ms`,
    }), [transformOrigin, ease, timeout, delay]);
    return ((0, jsx_runtime_1.jsx)(Transition_1.Transition, { ...props, ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, children: children }, void 0));
});
exports.ScaleDownTransition = ScaleDownTransition;
