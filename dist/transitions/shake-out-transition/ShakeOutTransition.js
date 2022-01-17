var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useMemo, } from "react";
import { Transition } from "../transition";
import { Ease } from "../../ease";
import { useCSSStyle } from "../../hooks";
var styleIndex = 0;
var getShakeKeyframe = function (from, to) {
    styleIndex++;
    return "@keyframes ShakeOutTransition".concat(styleIndex, " {\n  0% {\n    -webkit-transform: translateX(").concat(from, ");\n    transform: translateX(").concat(from, ");\n  }\n\n  6.5% {\n    -webkit-transform: translateX(((").concat(to, " * 0.2) + ").concat(to, ") * -1)) rotateY(-9deg);\n    transform: translateX(calc(((").concat(to, " * 0.2) + ").concat(to, ") * -1)) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(").concat(to, ") rotateY(7deg);\n    transform: translateX(").concat(to, ") rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(calc((").concat(to, " / 2) * -1)) rotateY(-5deg);\n    transform: translateX(calc((").concat(to, " / 2) * -1)) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(calc(").concat(to, " / 3)) rotateY(3deg);\n    transform: translateX(calc(").concat(to, " / 3)) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(").concat(from, ");\n    transform: translateX(").concat(from, ");\n  }\n}");
};
var ShakeOutTransition = forwardRef(function (_a, outsideRef) {
    var children = _a.children, from = _a.from, to = _a.to, timeout = _a.timeout, _b = _a.ease, ease = _b === void 0 ? Ease.ease : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, props = __rest(_a, ["children", "from", "to", "timeout", "ease", "delay"]);
    var shakeKeyFrame = useMemo(function () { return getShakeKeyframe(from, to); }, [from, to]);
    useEffect(function () {
        var sheet = document.styleSheets[0];
        sheet.insertRule(shakeKeyFrame, sheet.cssRules.length);
    }, [shakeKeyFrame]);
    var defaultStyle = useCSSStyle({
        animationIterationCount: 1,
        animationFillMode: "forwards",
        animationDirection: "normal",
    }, []);
    var transitionStyle = useMemo(function () { return ({
        entering: {
            animation: "",
        },
        entered: {
            animation: "",
        },
        exiting: {
            animation: "ShakeOutTransition".concat(styleIndex, " ").concat(timeout, "ms ").concat(ease, " ").concat(delay, "ms"),
        },
        exited: {
            animation: "ShakeOutTransition".concat(styleIndex, " ").concat(timeout, "ms ").concat(ease, " ").concat(delay, "ms"),
        },
    }); }, [delay, timeout, ease]);
    return (_jsx(Transition, __assign({}, props, { ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "ShakeOutTransition" }, { children: children }), void 0));
});
ShakeOutTransition.displayName = "ShakeOutTransition";
export { ShakeOutTransition };
