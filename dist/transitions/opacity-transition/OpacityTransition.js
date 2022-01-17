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
import { forwardRef, useMemo, } from "react";
import { Transition } from "../transition/Transition";
import { Ease } from "../../ease";
var OpacityTransition = forwardRef(function (_a, outsideRef) {
    var children = _a.children, from = _a.from, to = _a.to, _b = _a.delay, delay = _b === void 0 ? 0 : _b, timeout = _a.timeout, _c = _a.ease, ease = _c === void 0 ? Ease.ease : _c, props = __rest(_a, ["children", "from", "to", "delay", "timeout", "ease"]);
    var transitionStyle = useMemo(function () { return ({
        entering: {
            opacity: to,
        },
        entered: {
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
        // willChange: "opacity", // NOTE: this value interferes with the backdrop filter. If the backdrop is positioned absolute over the OpacityTransition, backdrop does not animate.
        transition: "opacity ".concat(timeout, "ms ").concat(ease, " ").concat(delay, "ms"),
    }); }, [timeout, delay, ease]);
    return (_jsx(Transition, __assign({}, props, { ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "OpacityTransition" }, { children: children }), void 0));
});
OpacityTransition.displayName = "OpacityTransition";
export { OpacityTransition };
