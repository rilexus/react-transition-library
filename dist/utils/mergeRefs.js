"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRefs = void 0;
function mergeRefs(refs) {
    return (elemRef) => {
        refs.forEach((ref) => {
            if (typeof ref === "function") {
                ref(elemRef);
            }
            else if (ref !== null) {
                ref.current = elemRef;
            }
        });
    };
}
exports.mergeRefs = mergeRefs;
