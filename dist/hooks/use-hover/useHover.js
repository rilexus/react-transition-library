import { useMemo, useRef, useState } from "react";
import { useMouseEnter } from "../use-mouse-enter";
import { useMouseLeave } from "../use-mouse-leave";
function useHover() {
    var ref = useRef();
    var _a = useState(false), _in = _a[0], _setIn = _a[1];
    useMouseEnter(ref, function () {
        _setIn(true);
    });
    useMouseLeave(ref, function () {
        _setIn(false);
    });
    return useMemo(function () {
        return ({ ref: ref, in: _in });
    }, [ref, _in]);
}
export { useHover };
