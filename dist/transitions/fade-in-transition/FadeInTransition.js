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
import { Transition } from "../transition";
import { forwardRef, useMemo } from "react";
import { Ease } from "../../ease";
var FadeInTransition = forwardRef(function (_a, outsideRef) {
    var children = _a.children, _b = _a.ease, ease = _b === void 0 ? Ease.ease : _b, timeout = _a.timeout, _c = _a.delay, delay = _c === void 0 ? 0 : _c, style = _a.style, _d = _a.from, from = _d === void 0 ? 0 : _d, _e = _a.to, to = _e === void 0 ? 1 : _e, props = __rest(_a, ["children", "ease", "timeout", "delay", "style", "from", "to"]);
    var transitionStyle = useMemo(function () { return ({
        entered: {
            opacity: to,
        },
        entering: {
            opacity: to,
        },
        exiting: {
            opacity: from,
        },
        exited: {
            opacity: from,
        },
    }); }, [from, to]);
    var defaultStyle = useMemo(function () { return ({
        willChange: "opacity",
        transition: "opacity ".concat(timeout, "ms ").concat(ease, " ").concat(delay, "ms"),
    }); }, [timeout, delay, ease, from]);
    return (_jsx(Transition, __assign({}, props, { ref: outsideRef, style: style, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "FadeInTransition" }, { children: children }), void 0));
});
export { FadeInTransition };
