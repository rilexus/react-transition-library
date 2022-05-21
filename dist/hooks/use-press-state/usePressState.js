"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePressState = void 0;
const react_1 = require("react");
const use_press_1 = require("../use-press");
const usePress_1 = require("../use-press/usePress");
const usePressState = (ref) => {
    const [states, setStates] = (0, react_1.useState)(usePress_1.PRESS_TYPES.idle);
    (0, use_press_1.usePress)((type) => {
        setStates((s) => {
            return type;
        });
    }, ref);
    return states;
};
exports.usePressState = usePressState;
