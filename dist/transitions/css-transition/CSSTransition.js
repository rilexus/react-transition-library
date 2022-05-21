"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_transition_group_1 = require("react-transition-group");
const CSSTransition = ({ children, ...props }) => {
    const nodeRef = react_1.default.useRef(null); // NOTE: this fixes the findDomNode bug
    return ((0, jsx_runtime_1.jsx)(react_transition_group_1.CSSTransition, { nodeRef: nodeRef, ...props, children: (0, jsx_runtime_1.jsx)("div", { ref: nodeRef, children: children }, void 0) }, void 0));
};
exports.CSSTransition = CSSTransition;
