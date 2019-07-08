webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/perfil/perfil-header.jsx":
/*!*********************************************!*\
  !*** ./components/perfil/perfil-header.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _perfil_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil-header.scss */ "./components/perfil/perfil-header.scss");
/* harmony import */ var _perfil_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_perfil_header_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/media/felix/projects/green/components/perfil/perfil-header.jsx";


var friendRequest = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}));

var PerfilHeader = function PerfilHeader(_ref) {
  var user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header_perfil_cont",
    style: {
      background: "url(".concat(user.frontPageImg, ")center center no-repeat"),
      backgroundSize: 'cover'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "greeting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "hola, me llamo ", user.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, user.frontPageQuote), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "perfil_header_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "perfil_user_cont",
    style: {
      background: "url(".concat(user.perfilImg, ") center top no-repeat"),
      backgroundSize: 'cover'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "user_name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, user.name, " ", user.lastName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, friendRequest)));
};

/* harmony default export */ __webpack_exports__["default"] = (PerfilHeader);

/***/ })

})
//# sourceMappingURL=perfil.js.a3bd98df931dc124cde3.hot-update.js.map