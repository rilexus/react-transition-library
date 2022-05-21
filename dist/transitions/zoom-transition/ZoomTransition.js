"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Transition_1 = require("../transition/Transition");
const use_css_style_1 = require("../../hooks/use-css-style");
const ease_1 = require("../../ease");
const ZoomTransition = (0, react_1.forwardRef)(({ children, delay = 0, ease = ease_1.Ease.ease, transformOrigin = "center", from, to, timeout, ...props }, outsideRef) => {
    const defaultStyle = (0, use_css_style_1.useCSSStyle)({
        transformOrigin: transformOrigin,
        willChange: "transform",
        transition: `transform ${timeout}ms ${ease} ${delay}ms`,
    }, [timeout, ease, delay]);
    const transitionStyle = (0, react_1.useMemo)(() => ({
        entering: {
            transform: `scale(${to})`,
        },
        entered: {
            transform: `scale(${to})`,
        },
        exiting: {
            transform: `scale(${from})`,
        },
        exited: {
            transform: `scale(${from})`,
        },
    }), [from, to]);
    return ((0, jsx_runtime_1.jsx)(Transition_1.Transition, { ...props, ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: `ZoomInTransition`, children: children }, void 0));
});
exports.ZoomTransition = ZoomTransition;
ZoomTransition.displayName = "ZoomTransition";
