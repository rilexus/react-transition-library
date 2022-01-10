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
import { useCSSStyle } from "../../hooks";
import { Transition } from "../transition";
import { Ease } from "../../ease";
var TranslateTransition = forwardRef(function (_a, outsideRef) {
    var children = _a.children, to = _a.to, from = _a.from, timeout = _a.timeout, _b = _a.ease, ease = _b === void 0 ? Ease.ease : _b, delay = _a.delay, props = __rest(_a, ["children", "to", "from", "timeout", "ease", "delay"]);
    var defaultStyle = useCSSStyle({
        willChange: "transform",
        transition: "transform ".concat(timeout, "ms ").concat(ease, " ").concat(delay, "ms"),
        transform: "translate(".concat(from[0], ", ").concat(from[1], ")"),
    }, [from[0], from[1], timeout, ease, delay]);
    var transitionStyle = useMemo(function () { return ({
        entering: {
            transform: "translate(".concat(to[0], ", ").concat(to[1], ")"),
        },
        entered: {
            transform: "translate(".concat(to[0], ", ").concat(to[1], ")"),
        },
        exiting: {
            transform: "translate(".concat(from[0], ", ").concat(from[1], ")"),
        },
        exited: {
            transform: "translate(".concat(from[0], ", ").concat(from[1], ")"),
        },
    }); }, [from[0], from[1], to[0], to[1]]);
    return (_jsx(Transition, __assign({}, props, { ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "ScaleInUpTransition" }, { children: children }), void 0));
});
export { TranslateTransition };
