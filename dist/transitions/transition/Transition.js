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
import { Transition as RTGTransition } from "react-transition-group";
import React, { createElement, forwardRef, useEffect, useRef, useState, } from "react";
import { mergeRefs } from "../../utils/mergeRefs";
var Transition = forwardRef(function (_a, outsideRef) {
    var children = _a.children, defaultStyle = _a.defaultStyle, transitionStyle = _a.transitionStyle, className = _a.className, as = _a.as, style = _a.style, props = __rest(_a, ["children", "defaultStyle", "transitionStyle", "className", "as", "style"]);
    var _b = useState(false), _in = _b[0], _setIn = _b[1];
    var timeoutRef = useRef();
    var nodeRef = React.useRef(null);
    useEffect(function () {
        // NOTE: This is a workaround entering state not being animated when this
        // Component should animate on mount see:<Ω>
        requestAnimationFrame(function () {
            timeoutRef.current = setTimeout(function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _setIn(props.in);
            }, 5);
        });
        return function () {
            clearTimeout(timeoutRef.current);
        };
    }, [props.in, timeoutRef]);
    useEffect(function () {
        mergeRefs([nodeRef, outsideRef])(nodeRef.current);
    }, [nodeRef, outsideRef]);
    return (_jsx(RTGTransition, __assign({}, props, { in: _in, nodeRef: nodeRef }, { children: function (transitionStatus, childProps) {
            return createElement(as || "div", __assign(__assign({}, childProps), { style: __assign(__assign(__assign({}, style), defaultStyle), transitionStyle[transitionStatus]), className: className, ref: nodeRef }), children);
        } }), void 0));
});
Transition.displayName = "Transition";
export { Transition };
