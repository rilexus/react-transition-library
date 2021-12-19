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
import { useMemo } from "react";
import { useCSSStyle } from "../../hooks";
import { Transition } from "../transition";
import { Ease } from "../../ease";
var SlideYTransition = function (_a) {
    var children = _a.children, from = _a.from, to = _a.to, _b = _a.ease, ease = _b === void 0 ? Ease.ease : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, timeout = _a.timeout, props = __rest(_a, ["children", "from", "to", "ease", "delay", "timeout"]);
    var defaultStyle = useCSSStyle({
        willChange: "transform",
        transitionTimingFunction: "".concat(ease),
        transitionDelay: "".concat(delay, "ms"),
        transition: "transform ".concat(timeout, "ms"),
        transform: "translateY(".concat(from, ")"),
    }, [from, timeout, ease, delay]);
    var transitionStyle = useMemo(function () { return ({
        entering: {
            transform: "translateY(".concat(to, ")"),
        },
        entered: {
            transform: "translateY(".concat(to, ")"),
        },
        exiting: {
            transform: "translateY(".concat(from, ")"),
        },
        exited: {
            transform: "translateY(".concat(from, ")"),
        },
    }); }, [from, to]);
    return (_jsx(Transition, __assign({}, props, { timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "ScaleInUpTransition" }, { children: children }), void 0));
};
export { SlideYTransition };
