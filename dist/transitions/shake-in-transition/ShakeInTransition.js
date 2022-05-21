"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeInTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const transition_1 = require("../transition");
const ease_1 = require("../../ease");
const hooks_1 = require("../../hooks");
let styleIndex = 0;
const getShakeKeyframe = (from, to) => {
    styleIndex++;
    return `@keyframes ShakeInTransition${styleIndex} {
  0% {
    -webkit-transform: translateX(${from});
    transform: translateX(${from});
  }

  6.5% {
    -webkit-transform: translateX(((${to} * 0.2) + ${to}) * -1)) rotateY(-9deg);
    transform: translateX(calc(((${to} * 0.2) + ${to}) * -1)) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(${to}) rotateY(7deg);
    transform: translateX(${to}) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(calc((${to} / 2) * -1)) rotateY(-5deg);
    transform: translateX(calc((${to} / 2) * -1)) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(calc(${to} / 3)) rotateY(3deg);
    transform: translateX(calc(${to} / 3)) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(${from});
    transform: translateX(${from});
  }
}`;
};
const ShakeInTransition = (0, react_1.forwardRef)(({ children, from, to, timeout, ease = ease_1.Ease.ease, delay = 0, ...props }, outsideRef) => {
    const shakeKeyFrame = (0, react_1.useMemo)(() => getShakeKeyframe(from, to), [from, to]);
    (0, react_1.useEffect)(() => {
        const sheet = document.styleSheets[0];
        sheet.insertRule(shakeKeyFrame, sheet.cssRules.length);
    }, [shakeKeyFrame]);
    const defaultStyle = (0, hooks_1.useCSSStyle)({
        animationIterationCount: 1,
        animationFillMode: "forwards",
        animationDirection: "normal",
    }, []);
    const transitionStyle = (0, react_1.useMemo)(() => ({
        entering: {
            animation: `ShakeInTransition${styleIndex} ${timeout}ms ${ease} ${delay}ms`,
        },
        entered: {
            animation: `ShakeInTransition${styleIndex} ${timeout}ms ${ease} ${delay}ms`,
        },
        exiting: {
            animation: ``,
        },
        exited: {
            animation: ``,
        },
    }), [timeout, ease, delay]);
    return ((0, jsx_runtime_1.jsx)(transition_1.Transition, { ...props, ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "ShakeInTransition", children: children }, void 0));
});
exports.ShakeInTransition = ShakeInTransition;
ShakeInTransition.displayName = "ShakeInTransition";
