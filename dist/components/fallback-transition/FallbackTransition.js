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
import { jsx as _jsx } from "react/jsx-runtime";
import { ScaleDownTransition } from "../scale-down-transition";
import { BlurTransition } from "../blur-transition";
import { FadeOutTransition } from "../fade-out-transition/FadeOutTransition";
//
var FallbackTransition = function (_a) {
    var children = _a.children, scale = _a.scale, transformOrigin = _a.transformOrigin, blur = _a.blur, _in = _a["in"];
    return (_jsx(ScaleDownTransition, __assign({ transformOrigin: transformOrigin, timeout: scale.timeout, in: _in, from: scale.from, delay: scale.delay || 0, to: scale.to }, { children: _jsx("div", { children: _jsx(BlurTransition, __assign({ delay: blur.delay || 0, from: blur.from, to: blur.to, timeout: blur.timeout, in: _in }, { children: _jsx("div", { children: _jsx(FadeOutTransition, __assign({ timeout: 400, in: _in, from: 1, to: 0.4 }, { children: children }), void 0) }, void 0) }), void 0) }, void 0) }), void 0));
};
export { FallbackTransition };
