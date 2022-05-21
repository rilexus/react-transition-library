"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpacityTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Transition_1 = require("../transition/Transition");
const ease_1 = require("../../ease");
const OpacityTransition = (0, react_1.forwardRef)(({ children, from, to, delay = 0, timeout, ease = ease_1.Ease.ease, ...props }, outsideRef) => {
    const transitionStyle = (0, react_1.useMemo)(() => ({
        entering: {
            opacity: to,
        },
        entered: {
            opacity: to,
        },
        exiting: {
            opacity: from,
        },
        exited: {
            opacity: from,
        },
    }), [from, to]);
    const defaultStyle = (0, react_1.useMemo)(() => ({
        // willChange: "opacity", // NOTE: this value interferes with the backdrop filter. If the backdrop is positioned absolute over the OpacityTransition, backdrop does not animate.
        transition: `opacity ${timeout}ms ${ease} ${delay}ms`,
    }), [timeout, delay, ease]);
    return ((0, jsx_runtime_1.jsx)(Transition_1.Transition, { ...props, ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "OpacityTransition", children: children }, void 0));
});
exports.OpacityTransition = OpacityTransition;
OpacityTransition.displayName = "OpacityTransition";
