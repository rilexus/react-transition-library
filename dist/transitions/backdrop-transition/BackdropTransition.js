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
/**
 * NOTE: css backdrop-filter transition is a ducking bitch!
 * It does not play well with other transitions. Especially with the opacity.
 * */
var BackdropTransition = forwardRef(function (_a, outsideRef) {
    var timeout = _a.timeout, _b = _a.delay, delay = _b === void 0 ? 0 : _b, to = _a.to, _c = _a.ease, ease = _c === void 0 ? "ease" : _c, from = _a.from, backgroundColor = _a.backgroundColor, children = _a.children, props = __rest(_a, ["timeout", "delay", "to", "ease", "from", "backgroundColor", "children"]);
    var defaultStyle = useCSSStyle({
        willChange: "backdrop-filter",
        backgroundColor: backgroundColor,
        transition: "backdrop-filter ".concat(timeout, "ms ").concat(ease, " ").concat(delay, "ms, -webkit-backdrop-filter ").concat(timeout, "ms ").concat(ease, " ").concat(delay, "ms"),
    }, [timeout, delay]);
    var transitionStyle = useMemo(function () { return ({
        entering: {
            WebkitBackdropFilter: "blur(".concat(to, ")"),
            backdropFilter: "blur(".concat(to, ")"),
        },
        entered: {
            WebkitBackdropFilter: "blur(".concat(to, ")"),
            backdropFilter: "blur(".concat(to, ")"),
        },
        exiting: {
            WebkitBackdropFilter: "blur(".concat(from, ")"),
            backdropFilter: "blur(".concat(from, ")"),
        },
        exited: {
            WebkitBackdropFilter: "blur(".concat(from, ")"),
            backdropFilter: "blur(".concat(from, ")"),
        },
    }); }, [from, to]);
    return (_jsx(Transition, __assign({}, props, { timeout: timeout, ref: outsideRef, defaultStyle: defaultStyle, transitionStyle: transitionStyle, className: "BackdropTransition" }, { children: children }), void 0));
});
BackdropTransition.displayName = "BackdropTransition";
export { BackdropTransition };
