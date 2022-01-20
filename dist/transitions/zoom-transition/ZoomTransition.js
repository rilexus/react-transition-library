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
import { useCSSStyle } from "../../hooks/use-css-style";
import { Ease } from "../../ease";
var ZoomTransition = forwardRef(function (_a, outsideRef) {
    var children = _a.children, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.ease, ease = _c === void 0 ? Ease.ease : _c, _d = _a.transformOrigin, transformOrigin = _d === void 0 ? "center" : _d, from = _a.from, to = _a.to, timeout = _a.timeout, props = __rest(_a, ["children", "delay", "ease", "transformOrigin", "from", "to", "timeout"]);
    var defaultStyle = useCSSStyle({
        transformOrigin: transformOrigin,
        willChange: "transform",
        transition: "transform ".concat(timeout, "ms ").concat(ease, " ").concat(delay, "ms"),
    }, [timeout, ease, delay]);
    var transitionStyle = useMemo(function () { return ({
        entering: {
            transform: "scale(".concat(to, ")"),
        },
        entered: {
            transform: "scale(".concat(to, ")"),
        },
        exiting: {
            transform: "scale(".concat(from, ")"),
        },
        exited: {
            transform: "scale(".concat(from, ")"),
        },
    }); }, [from, to]);
    return (_jsx(Transition, __assign({}, props, { ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "ZoomInTransition" }, { children: children }), void 0));
});
ZoomTransition.displayName = "ZoomTransition";
export { ZoomTransition };
