import { useState } from "react";
import { usePress } from "../use-press";
import { PRESS_TYPES } from "../use-press/usePress";
var usePressState = function (ref) {
    var _a = useState(PRESS_TYPES.idle), states = _a[0], setStates = _a[1];
    usePress(function (type) {
        setStates(function (s) {
            return type;
        });
    }, ref);
    return states;
};
export { usePressState };
