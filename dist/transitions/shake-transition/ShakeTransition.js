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
import { ShakeInTransition } from "../shake-in-transition";
import { ShakeOutTransition } from "../shake-out-transition";
/**
 * Shake Transition
 * @example <caption>Shake Transition</caption>
 * <ShakeTransition
    in={true}
    delay={1000}
    timeout={700}
    from={"0px"}
    to={"2rem"}
    >
      <div>ShakeTransition</div>
  </ShakeTransition>
 **/
var ShakeTransition = forwardRef(function (_a, outsideRef) {
    var _b = _a.from, from = _b === void 0 ? "0px" : _b, _c = _a.to, to = _c === void 0 ? "2rem" : _c, timeout = _a.timeout, children = _a.children, props = __rest(_a, ["from", "to", "timeout", "children"]);
    return (_jsx(ShakeInTransition
    // shake when animate === true
    , __assign({}, props, { ref: outsideRef, from: from, to: to, timeout: timeout }, { children: _jsx(ShakeOutTransition
        // shake when animate === false
        , __assign({}, props, { to: to, from: from, timeout: timeout }, { children: children }), void 0) }), void 0));
});
export { ShakeTransition };
