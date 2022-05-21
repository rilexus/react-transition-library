"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideYTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const translate_transition_1 = require("../translate-transition");
const SlideYTransition = (0, react_1.forwardRef)(({ children, from, to, ...props }, outsideRef) => {
    return ((0, jsx_runtime_1.jsx)(translate_transition_1.TranslateTransition, { ...props, ref: outsideRef, from: ["0px", from], to: ["0px", to], children: children }, void 0));
});
exports.SlideYTransition = SlideYTransition;
SlideYTransition.displayName = "SlideYTransition";
