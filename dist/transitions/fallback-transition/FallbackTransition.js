"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallbackTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const scale_down_transition_1 = require("../scale-down-transition");
const blur_transition_1 = require("../blur-transition");
const FadeOutTransition_1 = require("../fade-out-transition/FadeOutTransition");
//
const FallbackTransition = ({ children, scale, transformOrigin, blur, ["in"]: _in, }) => {
    return ((0, jsx_runtime_1.jsx)(scale_down_transition_1.ScaleDownTransition, { transformOrigin: transformOrigin, timeout: scale.timeout, in: _in, from: scale.from, delay: scale.delay || 0, to: scale.to, children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(blur_transition_1.BlurTransition, { delay: blur.delay || 0, from: blur.from, to: blur.to, timeout: blur.timeout, in: _in, children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(FadeOutTransition_1.FadeOutTransition, { timeout: 400, in: _in, from: 1, to: 0.4, children: children }, void 0) }, void 0) }, void 0) }, void 0) }, void 0));
};
exports.FallbackTransition = FallbackTransition;
