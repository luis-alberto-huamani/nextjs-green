webpackHotUpdate("static/development/pages/foo.js",{

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
  var perfilImg = _ref.perfilImg,
      name = _ref.name,
      lastName = _ref.lastName,
      frontPageQuote = _ref.frontPageQuote,
      remove = _ref.remove,
      add = _ref.add;
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
    onClick: remove,
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, name, " ", lastName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
    onClick: add,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Agregar")));
};

var Friends = function Friends(_ref2) {
  var users = _ref2.users;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "friends_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, users.map(function (user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Person, {
      name: user.name,
      lastName: user.lastName,
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

/***/ }),

/***/ "./pages/foo.jsx":
/*!***********************!*\
  !*** ./pages/foo.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_perfil_friends_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/perfil/friends.scss */ "./components/perfil/friends.scss");
/* harmony import */ var _components_perfil_friends_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_perfil_friends_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_perfil_friends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/perfil/friends */ "./components/perfil/friends.jsx");





var _jsxFileName = "/media/felix/projects/green/pages/foo.jsx";



var users = [{
  name: 'jhon',
  lastName: 'ebrio',
  perfilImg: '/static/friend-1.jpg',
  frontPageQuote: 'Debemos cuidar el mundo, yo siemre reciclo mis latas de cerveza'
}, {
  name: 'sacha',
  lastName: 'gray',
  perfilImg: '/static/friend-2.jpg',
  frontPageQuote: 'En el set de grabacion todos los condones se reciclan'
}, {
  name: 'rachel',
  lastName: 'star',
  perfilImg: '/static/friend-3.jpg',
  frontPageQuote: 'Debemos cuidar nuestras playas para evitar el sifilis'
}, {
  name: 'mia',
  lastName: 'kalifa',
  perfilImg: '/static/friend-4.jpg',
  frontPageQuote: 'No tengo nada que decir, solo entre aqui a subir mis videos para ganar greencoins'
}];

var Foo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Foo, _Component);

  function Foo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Foo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Foo).call(this, props));
    _this.state = {
      api: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Foo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_perfil_friends__WEBPACK_IMPORTED_MODULE_7__["default"], {
        users: users,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }));
    }
  }]);

  return Foo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Foo);

/***/ })

})
//# sourceMappingURL=foo.js.0ed1eef826dc507b674b.hot-update.js.map