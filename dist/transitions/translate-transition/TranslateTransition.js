"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const transition_1 = require("../transition");
const ease_1 = require("../../ease");
const TranslateTransition = (0, react_1.forwardRef)(({ children, to, from, timeout = 400, ease = ease_1.Ease.ease, delay = 0, ...props }, outsideRef) => {
    const fromX = from[0];
    const fromY = from[1];
    const toX = to[0];
    const toY = to[1];
    const defaultStyle = (0, hooks_1.useCSSStyle)({
        willChange: "transform",
        transition: `transform ${timeout}ms ${ease} ${delay}ms`,
        transform: `translate(${fromX}, ${fromY})`,
    }, [fromX, fromY, timeout, ease, delay]);
    const transitionStyle = (0, react_1.useMemo)(() => ({
        entering: {
            transform: `translate(${toX}, ${toY})`,
        },
        entered: {
            transform: `translate(${toX}, ${toY})`,
        },
        exiting: {
            transform: `translate(${fromX}, ${fromY})`,
        },
        exited: {
            transform: `translate(${fromX}, ${fromY})`,
        },
    }), [fromX, fromY, toX, toY]);
    return ((0, jsx_runtime_1.jsx)(transition_1.Transition, { ...props, ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "ScaleInUpTransition", children: children }, void 0));
});
exports.TranslateTransition = TranslateTransition;
TranslateTransition.displayName = "TranslateTransition";
