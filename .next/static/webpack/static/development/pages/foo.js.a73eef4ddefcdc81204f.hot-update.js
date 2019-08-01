webpackHotUpdate("static/development/pages/foo.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _foo_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foo.scss */ "./pages/foo.scss");
/* harmony import */ var _foo_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_foo_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "/media/felix/projects/green/pages/foo.jsx";



var myUsers = [{
  id: '1234561',
  url: '/kadkans',
  fullName: 'jhon doe',
  perfilImg: '/static/friend-1.jpg',
  frontPageQuote: 'Debemos cuidar el mundo, yo siemre reciclo mis latas de cerveza'
}, {
  id: '1234562',
  url: '/kadkans',
  fullName: 'sacha gray',
  perfilImg: '/static/friend-2.jpg',
  frontPageQuote: 'En el set de grabacion todos los condones se reciclan'
}, {
  id: '1234563',
  url: '/kadkans',
  fullName: 'rachel star',
  perfilImg: '/static/friend-3.jpg',
  frontPageQuote: 'Debemos cuidar nuestras playas para evitar el sifilis'
}];
var person = {
  id: '12345678910',
  mail: 'person4@mail.com',
  pass: '123456',
  name: 'thera',
  lastName: 'earth',
  fullName: 'thera earth',
  birthday: '13/07/2019',
  history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis! Officiis distinctio in aliquid, deleniti facilis hic animi incidunt ab nulla soluta et unde accusantium expedita sed debitis impedit est!',
  interest: 'Lorem ipsum dolor sit amet consectetur',
  perfilImg: '/static/friend-4.jpg',
  frontPageImg: '/static/hero-0.jpg',
  frontPageQuote: '-La conservación es un estado de armonía entre hombre y tierra.-Aldo Leopold.',
  wallet: 500,
  posts: [],
  friends: [],
  friendReq: [],
  gifts: 10,
  comments: []
};

var AddPost = function AddPost(_ref) {
  var visible = _ref.visible;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "addPost_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    isOpen: visible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "addPost_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
    className: "addPost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "shadow text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "hi")))));
};

var Foo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Foo, _Component);

  function Foo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Foo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Foo).call(this, props));
    _this.state = {
      addPostVisible: false
    };
    _this.onAddPost = _this.onAddPost.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Foo, [{
    key: "onAddPost",
    value: function onAddPost() {
      var addPostVisible = this.state.addPostVisible;
      this.setState({
        addPostVisible: !addPostVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var addPostVisible = this.state.addPostVisible;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "foo_cont container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.onAddPost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Crear Post"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(AddPost, {
        visible: addPostVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }));
    }
  }]);

  return Foo;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Foo);

/***/ })

})
//# sourceMappingURL=foo.js.a73eef4ddefcdc81204f.hot-update.js.map