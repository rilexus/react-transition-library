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
import { FadeInTransition } from "../fade-in-transition";
import { SlideYTransition } from "../slide-y-transition";
var FadeInUpTransition = forwardRef(function (_a, outsideRed) {
    var children = _a.children, _b = _a.fadeIn, fadeIn = _b === void 0 ? { timeout: 700, from: 0, to: 1 } : _b, _c = _a.slideY, slideY = _c === void 0 ? { timeout: 700, from: "100%", to: "0%" } : _c, props = __rest(_a, ["children", "fadeIn", "slideY"]);
    return (_jsx(FadeInTransition, __assign({}, props, { ref: outsideRed, from: 0, to: 1, timeout: 700 }, fadeIn, { children: _jsx(SlideYTransition, __assign({}, props, { from: "100%", to: "0%", timeout: 700 }, slideY, { children: children }), void 0) }), void 0));
});
FadeInUpTransition.displayName = "FadeInUpTransition";
export { FadeInUpTransition };
