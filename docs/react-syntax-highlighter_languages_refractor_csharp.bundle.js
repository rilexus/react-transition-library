"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_transitions_library"] = self["webpackChunkreact_transitions_library"] || []).push([["react-syntax-highlighter_languages_refractor_csharp"],{

/***/ "./node_modules/refractor/lang/csharp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/csharp.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = csharp\ncsharp.displayName = 'csharp'\ncsharp.aliases = ['dotnet', 'cs']\nfunction csharp(Prism) {\n  Prism.languages.csharp = Prism.languages.extend('clike', {\n    keyword: /\\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\\b/,\n    string: [\n      {\n        pattern: /@(\"|')(?:\\1\\1|\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/,\n        greedy: true\n      },\n      {\n        pattern: /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*?\\1/,\n        greedy: true\n      }\n    ],\n    'class-name': [\n      {\n        // (Foo bar, Bar baz)\n        pattern: /\\b[A-Z]\\w*(?:\\.\\w+)*\\b(?=\\s+\\w+)/,\n        inside: {\n          punctuation: /\\./\n        }\n      },\n      {\n        // [Foo]\n        pattern: /(\\[)[A-Z]\\w*(?:\\.\\w+)*\\b/,\n        lookbehind: true,\n        inside: {\n          punctuation: /\\./\n        }\n      },\n      {\n        // class Foo : Bar\n        pattern: /(\\b(?:class|interface)\\s+[A-Z]\\w*(?:\\.\\w+)*\\s*:\\s*)[A-Z]\\w*(?:\\.\\w+)*\\b/,\n        lookbehind: true,\n        inside: {\n          punctuation: /\\./\n        }\n      },\n      {\n        // class Foo\n        pattern: /((?:\\b(?:class|interface|new)\\s+)|(?:catch\\s+\\())[A-Z]\\w*(?:\\.\\w+)*\\b/,\n        lookbehind: true,\n        inside: {\n          punctuation: /\\./\n        }\n      }\n    ],\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)f?/i,\n    operator: />>=?|<<=?|[-=]>|([-+&|?])\\1|~|[-+*/%&|^!=<>]=?/,\n    punctuation: /\\?\\.?|::|[{}[\\];(),.:]/\n  })\n  Prism.languages.insertBefore('csharp', 'class-name', {\n    'generic-method': {\n      pattern: /\\w+\\s*<[^>\\r\\n]+?>\\s*(?=\\()/,\n      inside: {\n        function: /^\\w+/,\n        'class-name': {\n          pattern: /\\b[A-Z]\\w*(?:\\.\\w+)*\\b/,\n          inside: {\n            punctuation: /\\./\n          }\n        },\n        keyword: Prism.languages.csharp.keyword,\n        punctuation: /[<>(),.:]/\n      }\n    },\n    preprocessor: {\n      pattern: /(^\\s*)#.*/m,\n      lookbehind: true,\n      alias: 'property',\n      inside: {\n        // highlight preprocessor directives as keywords\n        directive: {\n          pattern: /(\\s*#)\\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\\b/,\n          lookbehind: true,\n          alias: 'keyword'\n        }\n      }\n    }\n  })\n  Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp\n}\n\n\n//# sourceURL=webpack://react-transitions-library/./node_modules/refractor/lang/csharp.js?");

/***/ })

}]);