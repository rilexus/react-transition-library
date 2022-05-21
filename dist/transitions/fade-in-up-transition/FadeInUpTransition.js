"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeInUpTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fade_in_transition_1 = require("../fade-in-transition");
const slide_y_transition_1 = require("../slide-y-transition");
const FadeInUpTransition = (0, react_1.forwardRef)(({ children, fadeIn = { timeout: 700, from: 0, to: 1 }, slideY = { timeout: 700, from: "100%", to: "0%" }, ...props }, outsideRed) => {
    return ((0, jsx_runtime_1.jsx)(fade_in_transition_1.FadeInTransition, { ...props, ref: outsideRed, from: 0, to: 1, timeout: 700, ...fadeIn, children: (0, jsx_runtime_1.jsx)(slide_y_transition_1.SlideYTransition, { ...props, from: "100%", to: "0%", timeout: 700, ...slideY, children: children }, void 0) }, void 0));
});
exports.FadeInUpTransition = FadeInUpTransition;
FadeInUpTransition.displayName = "FadeInUpTransition";
