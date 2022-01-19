function mergeRefs(refs) {
    return function (elemRef) {
        refs.forEach(function (ref) {
            if (typeof ref === "function") {
                ref(elemRef);
            }
            else if (ref !== null) {
                ref.current = elemRef;
            }
        });
    };
}
export { mergeRefs };
