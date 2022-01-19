import { LegacyRef, MutableRefObject, RefCallback } from "react";

function mergeRefs<Ref = any>(
  refs: Array<MutableRefObject<Ref> | LegacyRef<Ref>>
): RefCallback<Ref> {
  return (elemRef: any) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(elemRef);
      } else if (ref !== null) {
        (ref as MutableRefObject<Ref | null>).current = elemRef;
      }
    });
  };
}
export { mergeRefs };
