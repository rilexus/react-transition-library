"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_transitions_library"] = self["webpackChunkreact_transitions_library"] || []).push([["react-syntax-highlighter_languages_refractor_pascal"],{

/***/ "./node_modules/refractor/lang/pascal.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/pascal.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = pascal\npascal.displayName = 'pascal'\npascal.aliases = ['objectpascal']\nfunction pascal(Prism) {\n  // Based on Free Pascal\n  /* TODO\nSupport inline asm ?\n*/\n  Prism.languages.pascal = {\n    comment: [/\\(\\*[\\s\\S]+?\\*\\)/, /\\{[\\s\\S]+?\\}/, /\\/\\/.*/],\n    string: {\n      pattern: /(?:'(?:''|[^'\\r\\n])*'|#[&$%]?[a-f\\d]+)+|\\^[a-z]/i,\n      greedy: true\n    },\n    keyword: [\n      {\n        // Turbo Pascal\n        pattern: /(^|[^&])\\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\\b/i,\n        lookbehind: true\n      },\n      {\n        // Free Pascal\n        pattern: /(^|[^&])\\b(?:dispose|exit|false|new|true)\\b/i,\n        lookbehind: true\n      },\n      {\n        // Object Pascal\n        pattern: /(^|[^&])\\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\\b/i,\n        lookbehind: true\n      },\n      {\n        // Modifiers\n        pattern: /(^|[^&])\\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\\b/i,\n        lookbehind: true\n      }\n    ],\n    number: [\n      // Hexadecimal, octal and binary\n      /(?:[&%]\\d+|\\$[a-f\\d]+)/i, // Decimal\n      /\\b\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?/i\n    ],\n    operator: [\n      /\\.\\.|\\*\\*|:=|<[<=>]?|>[>=]?|[+\\-*\\/]=?|[@^=]/i,\n      {\n        pattern: /(^|[^&])\\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\\b/,\n        lookbehind: true\n      }\n    ],\n    punctuation: /\\(\\.|\\.\\)|[()\\[\\]:;,.]/\n  }\n  Prism.languages.objectpascal = Prism.languages.pascal\n}\n\n\n//# sourceURL=webpack://react-transitions-library/./node_modules/refractor/lang/pascal.js?");

/***/ })

}]);