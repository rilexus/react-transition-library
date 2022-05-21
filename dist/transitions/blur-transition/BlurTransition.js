"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlurTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const transition_1 = require("../transition");
const hooks_1 = require("../../hooks");
const ease_1 = require("../../ease");
const BlurTransition = (0, react_1.forwardRef)(({ children, timeout, delay = 0, from, to, ease = ease_1.Ease.ease, ...props }, outsideRef) => {
    const defaultStyle = (0, hooks_1.useCSSStyle)({
        willChange: "filter",
        transition: `filter ${timeout}ms ${ease} ${delay}ms`,
    }, [timeout, delay, ease]);
    const transitionStyle = (0, react_1.useMemo)(() => ({
        entering: {
            filter: `blur(${to})`,
        },
        entered: {
            filter: `blur(${to})`,
        },
        exiting: {
            filter: `blur(${from})`,
        },
        exited: {
            filter: `blur(${from})`,
        },
    }), [from, to]);
    return ((0, jsx_runtime_1.jsx)(transition_1.Transition, { ...props, ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, children: children }, void 0));
});
exports.BlurTransition = BlurTransition;
BlurTransition.displayName = "BlurTransition";
