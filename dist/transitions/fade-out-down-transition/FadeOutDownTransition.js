"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeOutDownTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fade_out_transition_1 = require("../fade-out-transition");
const slide_y_transition_1 = require("../slide-y-transition");
const defaultFadeOutProps = {
    timeout: 700,
    from: 1,
    to: 0,
};
const defaultSlideYProps = {
    timeout: 700,
    from: "0%",
    to: "100%",
};
const FadeOutDownTransition = (0, react_1.forwardRef)(({ children, fadeOut = defaultFadeOutProps, slideY = defaultSlideYProps, ...props }, outsideRef) => {
    return ((0, jsx_runtime_1.jsx)(fade_out_transition_1.FadeOutTransition, { ...props, ref: outsideRef, timeout: 700, from: 1, to: 0, ...fadeOut, children: (0, jsx_runtime_1.jsx)(slide_y_transition_1.SlideYTransition, { ...props, from: "0%", to: "100%", timeout: 700, ...slideY, children: children }, void 0) }, void 0));
});
exports.FadeOutDownTransition = FadeOutDownTransition;
FadeOutDownTransition.displayName = "FadeOutDownTransition";
