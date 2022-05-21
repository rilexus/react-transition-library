"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
const react_1 = require("react");
const use_mouse_enter_1 = require("../use-mouse-enter");
const use_mouse_leave_1 = require("../use-mouse-leave");
function useHover() {
    const ref = (0, react_1.useRef)();
    const [_in, _setIn] = (0, react_1.useState)(false);
    (0, use_mouse_enter_1.useMouseEnter)(ref, () => {
        _setIn(true);
    });
    (0, use_mouse_leave_1.useMouseLeave)(ref, () => {
        _setIn(false);
    });
    return (0, react_1.useMemo)(() => ({ ref, in: _in }), [ref, _in]);
}
exports.useHover = useHover;
