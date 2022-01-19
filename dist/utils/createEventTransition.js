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
import { useEffect, useRef, useState, forwardRef, } from "react";
import { mergeRefs } from "./mergeRefs";
function createEventTransition(type, render) {
    var Component = forwardRef(function (props, outsideRef) {
        var ref = useRef(null);
        var _a = useState(false), _in = _a[0], setIn = _a[1];
        var timeoutRef = useRef();
        useEffect(function () {
            return function () {
                // cancel timout on unmount
                clearTimeout(timeoutRef.current);
            };
        }, [timeoutRef]);
        useEffect(function () {
            var current = ref.current;
            var handle = function () {
                // set _in to "true" and after timeout to "false"
                setIn(function (i) {
                    timeoutRef.current = setTimeout(function () {
                        setIn(function (i) { return !i; });
                    }, props.timeout);
                    return !i;
                });
            };
            // listen for events on ref
            current === null || current === void 0 ? void 0 : current.addEventListener(type, handle);
            return function () {
                current === null || current === void 0 ? void 0 : current.removeEventListener(type, handle);
            };
        }, [ref, props.timeout]);
        return render(__assign(__assign({}, props), { in: _in }), mergeRefs([ref, outsideRef]));
    });
    Component.displayName = "EventTransition";
    return Component;
}
export { createEventTransition };
