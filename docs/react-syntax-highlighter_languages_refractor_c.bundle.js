"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_transitions_library"] = self["webpackChunkreact_transitions_library"] || []).push([["react-syntax-highlighter_languages_refractor_c"],{

/***/ "./node_modules/refractor/lang/c.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/c.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = c\nc.displayName = 'c'\nc.aliases = []\nfunction c(Prism) {\n  Prism.languages.c = Prism.languages.extend('clike', {\n    'class-name': {\n      pattern: /(\\b(?:enum|struct)\\s+)\\w+/,\n      lookbehind: true\n    },\n    keyword: /\\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\\b/,\n    operator: />>=?|<<=?|->|([-+&|:])\\1|[?:~]|[-+*/%&|^!=<>]=?/,\n    number: /(?:\\b0x(?:[\\da-f]+\\.?[\\da-f]*|\\.[\\da-f]+)(?:p[+-]?\\d+)?|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?)[ful]*/i\n  })\n  Prism.languages.insertBefore('c', 'string', {\n    macro: {\n      // allow for multiline macro definitions\n      // spaces after the # character compile fine with gcc\n      pattern: /(^\\s*)#\\s*[a-z]+(?:[^\\r\\n\\\\]|\\\\(?:\\r\\n|[\\s\\S]))*/im,\n      lookbehind: true,\n      alias: 'property',\n      inside: {\n        // highlight the path of the include statement as a string\n        string: {\n          pattern: /(#\\s*include\\s*)(?:<.+?>|(\"|')(?:\\\\?.)+?\\2)/,\n          lookbehind: true\n        },\n        // highlight macro directives as keywords\n        directive: {\n          pattern: /(#\\s*)\\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\\b/,\n          lookbehind: true,\n          alias: 'keyword'\n        }\n      }\n    },\n    // highlight predefined macros as constants\n    constant: /\\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\\b/\n  })\n  delete Prism.languages.c['boolean']\n}\n\n\n//# sourceURL=webpack://react-transitions-library/./node_modules/refractor/lang/c.js?");

/***/ })

}]);