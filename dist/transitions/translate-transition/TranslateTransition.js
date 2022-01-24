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
    var children = _a.children, to = _a.to, from = _a.from, _b = _a.timeout, timeout = _b === void 0 ? 400 : _b, _c = _a.ease, ease = _c === void 0 ? Ease.ease : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, props = __rest(_a, ["children", "to", "from", "timeout", "ease", "delay"]);
    var fromX = from[0];
    var fromY = from[1];
    var toX = to[0];
    var toY = to[1];
    var defaultStyle = useCSSStyle({
        willChange: "transform",
        transition: "transform ".concat(timeout, "ms ").concat(ease, " ").concat(delay, "ms"),
        transform: "translate(".concat(fromX, ", ").concat(fromY, ")"),
    }, [fromX, fromY, timeout, ease, delay]);
    var transitionStyle = useMemo(function () { return ({
        entering: {
            transform: "translate(".concat(toX, ", ").concat(toY, ")"),
        },
        entered: {
            transform: "translate(".concat(toX, ", ").concat(toY, ")"),
        },
        exiting: {
            transform: "translate(".concat(fromX, ", ").concat(fromY, ")"),
        },
        exited: {
            transform: "translate(".concat(fromX, ", ").concat(fromY, ")"),
        },
    }); }, [fromX, fromY, toX, toY]);
    return (_jsx(Transition, __assign({}, props, { ref: outsideRef, timeout: timeout, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "ScaleInUpTransition" }, { children: children }), void 0));
});
TranslateTransition.displayName = "TranslateTransition";
export { TranslateTransition };
