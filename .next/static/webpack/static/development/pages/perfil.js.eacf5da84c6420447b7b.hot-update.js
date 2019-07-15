webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/perfil/perfil.jsx":
/*!**************************************!*\
  !*** ./components/perfil/perfil.jsx ***!
  \**************************************/
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
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _perfil_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./perfil.scss */ "./components/perfil/perfil.scss");
/* harmony import */ var _perfil_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_perfil_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _perfil_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./perfil-header */ "./components/perfil/perfil-header.jsx");
/* harmony import */ var _perfil_nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./perfil-nav */ "./components/perfil/perfil-nav.jsx");





var _jsxFileName = "/media/felix/projects/green/components/perfil/perfil.jsx";








var Perfil =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Perfil, _Component);

  function Perfil(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Perfil);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Perfil).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Perfil, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /*const { onLogin, user, onUser } = this.props;
       onLogin(true);
       const payload = {
         action: userAction.LOG_IN,
         data: user,
       }
       onUser(payload);*/
      var user = localStorage.getItem('friendReq');
      console.log(user[0].id);
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.props.user;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "perfil_main_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_perfil_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        user: user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_perfil_nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        user: user,
        id: user._id,
        posts: user.posts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));
    }
  }]);

  return Perfil;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); //const mapStateToProps = state => ({ login: state.login, userStore: state.user });
//const mapDispatchToProps = dispatch => bindActionCreators({ onLogin, onUser }, dispatch);


/* harmony default export */ __webpack_exports__["default"] = (Perfil); //connect(mapStateToProps, mapDispatchToProps)(Perfil);

/***/ })

})
//# sourceMappingURL=perfil.js.eacf5da84c6420447b7b.hot-update.js.map