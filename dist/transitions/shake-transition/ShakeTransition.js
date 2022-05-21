"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeTransition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const shake_in_transition_1 = require("../shake-in-transition");
const shake_out_transition_1 = require("../shake-out-transition");
/**
 * Shake Transition
 * @example <caption>Shake Transition</caption>
 * <ShakeTransition
    in={true}
    delay={1000}
    timeout={700}
    from={"0px"}
    to={"2rem"}
    >
      <div>ShakeTransition</div>
  </ShakeTransition>
 **/
const ShakeTransition = (0, react_1.forwardRef)(({ from = "0px", to = "2rem", timeout, children, ...props }, outsideRef) => {
    return ((0, jsx_runtime_1.jsx)(shake_in_transition_1.ShakeInTransition
    // shake when animate === true
    , { ...props, ref: outsideRef, from: from, to: to, timeout: timeout, children: (0, jsx_runtime_1.jsx)(shake_out_transition_1.ShakeOutTransition
        // shake when animate === false
        , { ...props, to: to, from: from, timeout: timeout, children: children }, void 0) }, void 0));
});
exports.ShakeTransition = ShakeTransition;
