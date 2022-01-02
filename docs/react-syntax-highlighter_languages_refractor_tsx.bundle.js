"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_transitions_library"] = self["webpackChunkreact_transitions_library"] || []).push([["react-syntax-highlighter_languages_refractor_tsx"],{

/***/ "./node_modules/refractor/lang/jsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/jsx.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = jsx\njsx.displayName = 'jsx'\njsx.aliases = []\nfunction jsx(Prism) {\n  ;(function(Prism) {\n    var javascript = Prism.util.clone(Prism.languages.javascript)\n    Prism.languages.jsx = Prism.languages.extend('markup', javascript)\n    Prism.languages.jsx.tag.pattern = /<\\/?(?:[\\w.:-]+\\s*(?:\\s+(?:[\\w.:-]+(?:=(?:(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|[^\\s{'\">=]+|\\{(?:\\{(?:\\{[^}]*\\}|[^{}])*\\}|[^{}])+\\}))?|\\{\\.{3}[a-z_$][\\w$]*(?:\\.[a-z_$][\\w$]*)*\\}))*\\s*\\/?)?>/i\n    Prism.languages.jsx.tag.inside['tag'].pattern = /^<\\/?[^\\s>\\/]*/i\n    Prism.languages.jsx.tag.inside[\n      'attr-value'\n    ].pattern = /=(?!\\{)(?:(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|[^\\s'\">]+)/i\n    Prism.languages.jsx.tag.inside['tag'].inside[\n      'class-name'\n    ] = /^[A-Z]\\w*(?:\\.[A-Z]\\w*)*$/\n    Prism.languages.insertBefore(\n      'inside',\n      'attr-name',\n      {\n        spread: {\n          pattern: /\\{\\.{3}[a-z_$][\\w$]*(?:\\.[a-z_$][\\w$]*)*\\}/,\n          inside: {\n            punctuation: /\\.{3}|[{}.]/,\n            'attr-value': /\\w+/\n          }\n        }\n      },\n      Prism.languages.jsx.tag\n    )\n    Prism.languages.insertBefore(\n      'inside',\n      'attr-value',\n      {\n        script: {\n          // Allow for two levels of nesting\n          pattern: /=(\\{(?:\\{(?:\\{[^}]*\\}|[^}])*\\}|[^}])+\\})/i,\n          inside: {\n            'script-punctuation': {\n              pattern: /^=(?={)/,\n              alias: 'punctuation'\n            },\n            rest: Prism.languages.jsx\n          },\n          alias: 'language-javascript'\n        }\n      },\n      Prism.languages.jsx.tag\n    ) // The following will handle plain text inside tags\n    var stringifyToken = function(token) {\n      if (!token) {\n        return ''\n      }\n      if (typeof token === 'string') {\n        return token\n      }\n      if (typeof token.content === 'string') {\n        return token.content\n      }\n      return token.content.map(stringifyToken).join('')\n    }\n    var walkTokens = function(tokens) {\n      var openedTags = []\n      for (var i = 0; i < tokens.length; i++) {\n        var token = tokens[i]\n        var notTagNorBrace = false\n        if (typeof token !== 'string') {\n          if (\n            token.type === 'tag' &&\n            token.content[0] &&\n            token.content[0].type === 'tag'\n          ) {\n            // We found a tag, now find its kind\n            if (token.content[0].content[0].content === '</') {\n              // Closing tag\n              if (\n                openedTags.length > 0 &&\n                openedTags[openedTags.length - 1].tagName ===\n                  stringifyToken(token.content[0].content[1])\n              ) {\n                // Pop matching opening tag\n                openedTags.pop()\n              }\n            } else {\n              if (token.content[token.content.length - 1].content === '/>') {\n                // Autoclosed tag, ignore\n              } else {\n                // Opening tag\n                openedTags.push({\n                  tagName: stringifyToken(token.content[0].content[1]),\n                  openedBraces: 0\n                })\n              }\n            }\n          } else if (\n            openedTags.length > 0 &&\n            token.type === 'punctuation' &&\n            token.content === '{'\n          ) {\n            // Here we might have entered a JSX context inside a tag\n            openedTags[openedTags.length - 1].openedBraces++\n          } else if (\n            openedTags.length > 0 &&\n            openedTags[openedTags.length - 1].openedBraces > 0 &&\n            token.type === 'punctuation' &&\n            token.content === '}'\n          ) {\n            // Here we might have left a JSX context inside a tag\n            openedTags[openedTags.length - 1].openedBraces--\n          } else {\n            notTagNorBrace = true\n          }\n        }\n        if (notTagNorBrace || typeof token === 'string') {\n          if (\n            openedTags.length > 0 &&\n            openedTags[openedTags.length - 1].openedBraces === 0\n          ) {\n            // Here we are inside a tag, and not inside a JSX context.\n            // That's plain text: drop any tokens matched.\n            var plainText = stringifyToken(token) // And merge text with adjacent text\n            if (\n              i < tokens.length - 1 &&\n              (typeof tokens[i + 1] === 'string' ||\n                tokens[i + 1].type === 'plain-text')\n            ) {\n              plainText += stringifyToken(tokens[i + 1])\n              tokens.splice(i + 1, 1)\n            }\n            if (\n              i > 0 &&\n              (typeof tokens[i - 1] === 'string' ||\n                tokens[i - 1].type === 'plain-text')\n            ) {\n              plainText = stringifyToken(tokens[i - 1]) + plainText\n              tokens.splice(i - 1, 1)\n              i--\n            }\n            tokens[i] = new Prism.Token(\n              'plain-text',\n              plainText,\n              null,\n              plainText\n            )\n          }\n        }\n        if (token.content && typeof token.content !== 'string') {\n          walkTokens(token.content)\n        }\n      }\n    }\n    Prism.hooks.add('after-tokenize', function(env) {\n      if (env.language !== 'jsx' && env.language !== 'tsx') {\n        return\n      }\n      walkTokens(env.tokens)\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://react-transitions-library/./node_modules/refractor/lang/jsx.js?");

/***/ }),

/***/ "./node_modules/refractor/lang/tsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tsx.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar refractorJsx = __webpack_require__(/*! ./jsx.js */ \"./node_modules/refractor/lang/jsx.js\")\nvar refractorTypescript = __webpack_require__(/*! ./typescript.js */ \"./node_modules/refractor/lang/typescript.js\")\nmodule.exports = tsx\ntsx.displayName = 'tsx'\ntsx.aliases = []\nfunction tsx(Prism) {\n  Prism.register(refractorJsx)\n  Prism.register(refractorTypescript)\n  var typescript = Prism.util.clone(Prism.languages.typescript)\n  Prism.languages.tsx = Prism.languages.extend('jsx', typescript)\n}\n\n\n//# sourceURL=webpack://react-transitions-library/./node_modules/refractor/lang/tsx.js?");

/***/ }),

/***/ "./node_modules/refractor/lang/typescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typescript.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = typescript\ntypescript.displayName = 'typescript'\ntypescript.aliases = ['ts']\nfunction typescript(Prism) {\n  Prism.languages.typescript = Prism.languages.extend('javascript', {\n    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words\n    keyword: /\\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\\b/,\n    builtin: /\\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\\b/\n  })\n  Prism.languages.ts = Prism.languages.typescript\n}\n\n\n//# sourceURL=webpack://react-transitions-library/./node_modules/refractor/lang/typescript.js?");

/***/ })

}]);