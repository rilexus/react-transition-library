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
import { Transition } from "../transition/Transition";
var FadeOutTransition = function (_a) {
    var children = _a.children, timeout = _a.timeout, from = _a.from, to = _a.to, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _in = _a.in, props = __rest(_a, ["children", "timeout", "from", "to", "delay", "in"]);
    return (_jsx(Transition, __assign({}, props, { in: _in, className: "FadeOutTransition", defaultStyle: {
            transition: "opacity ".concat(timeout, "ms ease ").concat(delay, "ms"),
            // opacity: 1,
        }, transitionStyle: {
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
        }, timeout: timeout }, { children: children }), void 0));
};
export { FadeOutTransition };
