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
import { forwardRef } from "react";
import { TranslateTransition } from "../translate-transition";
var SlideYTransition = forwardRef(function (_a, outsideRef) {
    var children = _a.children, from = _a.from, to = _a.to, props = __rest(_a, ["children", "from", "to"]);
    return (_jsx(TranslateTransition, __assign({}, props, { ref: outsideRef, from: ["0px", from], to: ["0px", to] }, { children: children }), void 0));
});
SlideYTransition.displayName = "SlideYTransition";
export { SlideYTransition };
