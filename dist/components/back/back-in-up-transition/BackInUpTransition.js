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
import { ZoomInTransition } from "../../zoom-in-transition";
import { SlideInUpTransition } from "../../slide-in";
var BackInUpTransition = function (_a) {
    var children = _a.children, timeout = _a.timeout, _b = _a.zoomIn, zoomInFrom = _b.from, zoomInTo = _b.to, _in = _a.in, _c = _a.slideIn, slideInFrom = _c.from, slideInTo = _c.to, props = __rest(_a, ["children", "timeout", "zoomIn", "in", "slideIn"]);
    return (_jsx(ZoomInTransition, __assign({}, props, { timeout: timeout, to: zoomInTo, from: zoomInFrom, in: _in }, { children: _jsx("div", { children: _jsx(SlideInUpTransition, __assign({ from: slideInFrom, to: slideInTo, timeout: timeout, in: _in }, { children: children }), void 0) }, void 0) }), void 0));
};
export { BackInUpTransition };
