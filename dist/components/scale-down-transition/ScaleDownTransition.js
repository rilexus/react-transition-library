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
import { forwardRef, useMemo } from "react";
import { Transition } from "../transition/Transition";
var ScaleDownTransition = forwardRef(function (_a, outsideRef) {
    var children = _a.children, timeout = _a.timeout, _b = _a.ease, ease = _b === void 0 ? "ease" : _b, _c = _a.transformOrigin, transformOrigin = _c === void 0 ? "center" : _c, _d = _a.delay, delay = _d === void 0 ? "0" : _d, from = _a.from, to = _a.to, props = __rest(_a, ["children", "timeout", "ease", "transformOrigin", "delay", "from", "to"]);
    var transitionStyle = useMemo(function () { return ({
        entered: {
            transform: "scale(".concat(to, ")"),
        },
        entering: {
            transform: "scale(".concat(to, ")"),
        },
        exiting: {
            transform: "scale(".concat(from, ")"),
        },
        exited: {
            transform: "scale(".concat(from, ")"),
        },
    }); }, [from, to]);
    var defaultStyle = useMemo(function () { return ({
        willChange: "transform",
        transformOrigin: transformOrigin,
        transitionTimingFunction: ease,
        transitionDelay: "".concat(delay, "ms"),
        transition: "transform ".concat(timeout, "ms"),
    }); }, [transformOrigin, ease, timeout, delay]);
    return (_jsx(Transition, __assign({}, props, { ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle }, { children: children }), void 0));
});
export { ScaleDownTransition };
