"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventTransition = void 0;
const react_1 = require("react");
const mergeRefs_1 = require("./mergeRefs");
function createEventTransition(type, render) {
    const Component = (0, react_1.forwardRef)((props, outsideRef) => {
        const ref = (0, react_1.useRef)(null);
        const [_in, setIn] = (0, react_1.useState)(false);
        const timeoutRef = (0, react_1.useRef)();
        (0, react_1.useEffect)(() => {
            return () => {
                // cancel timout on unmount
                clearTimeout(timeoutRef.current);
            };
        }, [timeoutRef]);
        (0, react_1.useEffect)(() => {
            const current = ref.current;
            const handle = () => {
                // set _in to "true" and after timeout to "false"
                setIn((i) => {
                    timeoutRef.current = setTimeout(() => {
                        setIn((i) => !i);
                    }, props.timeout);
                    return !i;
                });
            };
            // listen for events on ref
            current?.addEventListener(type, handle);
            return () => {
                current?.removeEventListener(type, handle);
            };
        }, [ref, props.timeout]);
        return render({ ...props, in: _in }, (0, mergeRefs_1.mergeRefs)([ref, outsideRef]));
    });
    Component.displayName = "EventTransition";
    return Component;
}
exports.createEventTransition = createEventTransition;
