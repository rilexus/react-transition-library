"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackdropTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const transition_1 = require("../transition");
/**
 * NOTE: css backdrop-filter transition is a ducking bitch!
 * It does not play well with other transitions. Especially with the opacity.
 * */
const BackdropTransition = (0, react_1.forwardRef)(({ timeout, delay = 0, to, ease = "ease", from, backgroundColor, children, ...props }, outsideRef) => {
    const defaultStyle = (0, hooks_1.useCSSStyle)({
        willChange: "backdrop-filter",
        backgroundColor,
        transition: `backdrop-filter ${timeout}ms ${ease} ${delay}ms, -webkit-backdrop-filter ${timeout}ms ${ease} ${delay}ms`,
    }, [timeout, delay]);
    const transitionStyle = (0, react_1.useMemo)(() => ({
        entering: {
            WebkitBackdropFilter: `blur(${to})`,
            backdropFilter: `blur(${to})`,
        },
        entered: {
            WebkitBackdropFilter: `blur(${to})`,
            backdropFilter: `blur(${to})`,
        },
        exiting: {
            WebkitBackdropFilter: `blur(${from})`,
            backdropFilter: `blur(${from})`,
        },
        exited: {
            WebkitBackdropFilter: `blur(${from})`,
            backdropFilter: `blur(${from})`,
        },
    }), [from, to]);
    return ((0, jsx_runtime_1.jsx)(transition_1.Transition, { ...props, timeout: timeout, ref: outsideRef, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "BackdropTransition", children: children }, void 0));
});
exports.BackdropTransition = BackdropTransition;
BackdropTransition.displayName = "BackdropTransition";
