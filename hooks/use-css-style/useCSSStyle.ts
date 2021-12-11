import {CSSProperties, useMemo} from "react";

const useCSSStyle = (style: CSSProperties, deps: any[]) => {
	return useMemo<CSSProperties>(() => style, deps);
};
export {useCSSStyle}
