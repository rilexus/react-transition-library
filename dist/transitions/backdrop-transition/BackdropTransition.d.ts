/// <reference types="react" />
/**
 * NOTE: css backdrop-filter transition is a ducking bitch!
 * It does not play well with other transitions. Especially with the opacity.
 * */
declare const BackdropTransition: ({ timeout, delay, to, ease, from, in: _in, children, ...props }: any) => JSX.Element;
export { BackdropTransition };
//# sourceMappingURL=BackdropTransition.d.ts.map