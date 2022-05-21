"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_transition_group_1 = require("react-transition-group");
const react_1 = __importStar(require("react"));
const mergeRefs_1 = require("../../utils/mergeRefs");
const Transition = (0, react_1.forwardRef)(({ children, defaultStyle, transitionStyle, className, as, style, ...props }, outsideRef) => {
    const [_in, _setIn] = (0, react_1.useState)(false);
    const timeoutRef = (0, react_1.useRef)();
    const nodeRef = react_1.default.useRef(null);
    (0, react_1.useEffect)(() => {
        // NOTE: This is a workaround entering state not being animated when this
        // Component should animate on mount see:<Ω>
        requestAnimationFrame(() => {
            timeoutRef.current = setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _setIn(props.in);
            }, 5);
        });
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [props.in, timeoutRef]);
    (0, react_1.useEffect)(() => {
        (0, mergeRefs_1.mergeRefs)([nodeRef, outsideRef])(nodeRef.current);
    }, [nodeRef, outsideRef]);
    return ((0, jsx_runtime_1.jsx)(react_transition_group_1.Transition, { ...props, in: _in, nodeRef: nodeRef, children: (transitionStatus, childProps) => {
            return (0, react_1.createElement)(as || "div", {
                ...childProps,
                style: {
                    ...style,
                    ...defaultStyle,
                    ...transitionStyle[transitionStatus],
                },
                className,
                ref: nodeRef,
            }, children);
        } }, void 0));
});
exports.Transition = Transition;
Transition.displayName = "Transition";
