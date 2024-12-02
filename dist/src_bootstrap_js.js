"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmfe2"] = self["webpackChunkmfe2"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c673\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nconst Mfe2Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  border-top: 2px solid #000;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 100px;\n`;\nconst FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer`\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  font-size: 14px;\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n`;\nconst FooterLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n`;\nconst FooterLink = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a`\n  color: #fff;\n  text-decoration: none;\n  font-size: 14px;\n\n  &:hover {\n    text-decoration: underline;\n  }\n`;\nconst Footer = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\xA9 \", new Date().getFullYear(), \" MFE2. Dev. By Shoaib Mulla\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterLinks, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterLink, {\n    href: \"#\"\n  }, \"Privacy Policy\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterLink, {\n    href: \"#\"\n  }, \"Terms of Service\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterLink, {\n    href: \"#\"\n  }, \"Contact\")));\n};\nconst App = ({\n  data\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mfe2Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"This is MFE2 App\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, data.json()));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://mfe2/./src/App.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c673\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n\n\n// import ReactDOM from \"react-dom\";\n\n// // use createRoot\n// ReactDOM.render(<App/>, document.getElementById(\"root\"));\n\n\nconst root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(document.getElementById('root'));\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n\n//# sourceURL=webpack://mfe2/./src/bootstrap.js?");

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function(c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  exports.hydrateRoot = function(c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://mfe2/./node_modules/react-dom/client.js?");

/***/ })

}]);