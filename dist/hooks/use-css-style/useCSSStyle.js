"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCSSStyle = void 0;
const react_1 = require("react");
const useCSSStyle = (style, deps) => {
    return (0, react_1.useMemo)(() => style, deps);
};
exports.useCSSStyle = useCSSStyle;
