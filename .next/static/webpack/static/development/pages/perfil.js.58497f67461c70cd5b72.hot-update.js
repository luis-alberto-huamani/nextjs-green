webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./pages/perfil.js":
/*!*************************!*\
  !*** ./pages/perfil.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.jsx");
/* harmony import */ var _components_perfil_perfil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/perfil/perfil */ "./components/perfil/perfil.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/media/felix/projects/green/pages/perfil.js";






var App = function App(_ref) {
  var user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, console.log("perfil pages: ".concat(user))));
};
/*App.getInitialProps = async ({ query }) => {
  const { id }  = query;
  const res = await fetch(`https://nextjs-green.ftandcompany.now.sh/api/perfil.js?id=${id}`);
  const user = await res.json();
  console.log(`initial props ${user}`);
  return { user };
};*/


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(App));

/***/ })

})
//# sourceMappingURL=perfil.js.58497f67461c70cd5b72.hot-update.js.map