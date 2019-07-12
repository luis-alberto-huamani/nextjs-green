webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/perfil/perfil-header.jsx":
/*!*********************************************!*\
  !*** ./components/perfil/perfil-header.jsx ***!
  \*********************************************/
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
/* harmony import */ var _perfil_header_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./perfil-header.scss */ "./components/perfil/perfil-header.scss");
/* harmony import */ var _perfil_header_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_perfil_header_scss__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/media/felix/projects/green/components/perfil/perfil-header.jsx";



var PerfilHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PerfilHeader, _Component);

  function PerfilHeader(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PerfilHeader);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PerfilHeader).call(this, props));
    _this.state = {
      friendReq: false
    };
    _this.handleFriend = _this.handleFriend.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PerfilHeader, [{
    key: "handleFriend",
    value: function handleFriend(e) {
      var friendReq = this.state.friendReq;
      this.setState({
        friendReq: !friendReq
      });
      console.log(e.target.id);
    }
  }, {
    key: "render",
    value: function render() {
      var friendReq = this.state.friendReq;
      var user = this.props.user;
      var addFriend = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        style: {
          fill: '#8bb940'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }));
      var rmFriend = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        id: user._id,
        style: {
          fill: '#ff6c1a'
        },
        title: "Cancelar solicitud",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M624 208H432c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: "header_perfil_cont",
        style: {
          background: "url(".concat(user.frontPageImg, ")center center no-repeat"),
          backgroundSize: 'cover'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "greeting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "hola, me llamo ", user.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, user.frontPageQuote), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("footer", {
        className: "perfil_header_footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "perfil_user_cont",
        style: {
          background: "url(".concat(user.perfilImg, ") center top no-repeat"),
          backgroundSize: 'cover'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "user_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, user.name, " ", user.lastName), friendReq ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        id: user._id,
        title: "Enviar solicitud",
        onClick: this.handleFriend,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, addFriend) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        title: "Cancelar solicitud",
        onClick: this.handleFriend,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, rmFriend)));
    }
  }]);

  return PerfilHeader;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PerfilHeader);

/***/ })

})
//# sourceMappingURL=perfil.js.fce861ed50de8480e11d.hot-update.js.map