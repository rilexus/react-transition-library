import { useMemo } from "react";
var useCSSStyle = function (style, deps) {
    return useMemo(function () { return style; }, deps);
};
export { useCSSStyle };
