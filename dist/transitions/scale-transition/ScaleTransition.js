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
import { Transition } from "../transition";
import { Ease } from "../../ease";
var ScaleTransition = forwardRef(function (_a, outsideRef) {
    var children = _a.children, timeout = _a.timeout, _b = _a.delay, delay = _b === void 0 ? "0" : _b, _in = _a["in"], from = _a.from, _c = _a.ease, ease = _c === void 0 ? Ease.ease : _c, to = _a.to, props = __rest(_a, ["children", "timeout", "delay", "in", "from", "ease", "to"]);
    var defaultStyle = useMemo(function () { return ({
        transform: "scale(".concat(from, ")"),
        transition: "transform ".concat(timeout, "ms ").concat(ease, " ").concat(delay, "ms"),
    }); }, [from, timeout, delay]);
    var transitionStyle = useMemo(function () { return ({
        entered: {
            transform: "scale(".concat(to, ")"),
        },
        entering: {
            transform: "scale(".concat(to, ")"),
        },
    }); }, [to]);
    return (_jsx(Transition, __assign({}, props, { in: _in, ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle }, { children: children }), void 0));
});
ScaleTransition.displayName = "ScaleTransition";
export { ScaleTransition };
