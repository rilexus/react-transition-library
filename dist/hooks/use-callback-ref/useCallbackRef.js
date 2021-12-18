import { useEffect, useRef } from "react";
var useCallbackRef = function (callback) {
    var ref = useRef(callback);
    useEffect(function () {
        ref.current = callback;
    }, [callback]);
    return ref;
};
export { useCallbackRef };
