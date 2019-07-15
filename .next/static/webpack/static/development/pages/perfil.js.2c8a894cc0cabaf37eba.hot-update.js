webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/perfil/friends.jsx":
/*!***************************************!*\
  !*** ./components/perfil/friends.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _friends_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends.scss */ "./components/perfil/friends.scss");
/* harmony import */ var _friends_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_friends_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/media/felix/projects/green/components/perfil/friends.jsx";



var Person = function Person(_ref) {
  var id = _ref.id,
      perfilImg = _ref.perfilImg,
      name = _ref.name,
      url = _ref.url,
      frontPageQuote = _ref.frontPageQuote,
      _onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "person_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "person_header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: id,
    onClick: function onClick() {
      return _onClick('rm');
    },
    title: "Eliminar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "X")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "person_info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: perfilImg,
    className: "img-fluid",
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "person_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, frontPageQuote))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "person_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return _onClick('add', id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Agregar")));
};

var Friends = function Friends(_ref2) {
  var users = _ref2.users,
      onClick = _ref2.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "friends_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, users.map(function (user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Person, {
      id: user.id,
      onClick: onClick,
      name: user.fullName,
      url: user.url,
      perfilImg: user.perfilImg,
      frontPageQuote: user.frontPageQuote,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Friends);

/***/ })

})
//# sourceMappingURL=perfil.js.2c8a894cc0cabaf37eba.hot-update.js.map