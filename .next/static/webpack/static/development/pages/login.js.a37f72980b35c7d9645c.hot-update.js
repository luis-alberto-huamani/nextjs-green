webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/login/login.jsx":
/*!************************************!*\
  !*** ./components/login/login.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login.scss */ "./components/login/login.scss");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_login_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _logo_2_logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../logo-2/logo */ "./components/logo-2/logo.jsx");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/functions */ "./utils/functions.js");
/* harmony import */ var _fail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fail */ "./components/login/fail.jsx");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../spinner/spinner */ "./components/spinner/spinner.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");








var _jsxFileName = "/media/felix/projects/green/components/login/login.jsx";












var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Login, _Component);

  function Login(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Login);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Login).call(this, props));
    _this.state = {
      login: true,
      mail: '',
      mailLabel: false,
      mailPop: false,
      pass: '',
      passLabel: false,
      passPop: false,
      spinner: false,
      fail: false
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onFocus = _this.onFocus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onBlur = _this.onBlur.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.id, e.target.value));
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var _this$setState2;

      var label = "".concat(e.target.id, "Label");
      var pop = "".concat(e.target.id, "Pop");
      this.setState((_this$setState2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$setState2, label, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$setState2, pop, false), _this$setState2));
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var label = "".concat(e.target.id, "Label");
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, label, false));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      var _this$state = this.state,
          mail = _this$state.mail,
          pass = _this$state.pass;
      var onUser = this.props.onUser;
      e.preventDefault();

      if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_12__["validateEmail"])(mail)) {
        this.setState({
          mailPop: true
        });
      } else if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_12__["validateEmpty"])(pass)) {
        this.setState({
          passPop: true
        });
      } else {
        this.setState({
          spinner: true,
          login: false
        });
        var data = {
          mail: mail,
          pass: pass //fetch('/api/login.js', {

        };
        fetch('http://localhost:4000/api/login', {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
        }).then(function (res) {
          if (res.status === 201) {
            _this2.setState({
              spinner: false,
              login: true
            });

            res.json().then(function (resp) {
              localStorage.setItem('id', resp._id);
              var payload = {
                action: _store_actions__WEBPACK_IMPORTED_MODULE_18__["userAction"].LOG_IN,
                data: resp
              };
              onUser(payload);
              next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push("/perfil?id=".concat(resp._id));
            });
          } else {
            _this2.setState({
              fail: true,
              login: false,
              spinner: false
            });

            setTimeout(function () {
              _this2.setState({
                login: true,
                fail: false
              });
            }, 3000);
          }
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          login = _this$state2.login,
          mail = _this$state2.mail,
          mailLabel = _this$state2.mailLabel,
          mailPop = _this$state2.mailPop,
          pass = _this$state2.pass,
          passLabel = _this$state2.passLabel,
          passPop = _this$state2.passPop,
          spinner = _this$state2.spinner,
          fail = _this$state2.fail;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "login_main_cont animated fadeIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, login && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form_header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_logo_2_logo__WEBPACK_IMPORTED_MODULE_11__["default"], {
        color: "#669f09",
        logoWidth: "30px",
        fontSize: "1.2rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        method: "POST",
        className: "form_login",
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input_cont",
        style: mailPop ? {
          borderBottomColor: '#ff6c1a'
        } : {
          borderBottomColor: "#669f09"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "mail",
        style: mailLabel ? {
          color: '#8bb940',
          background: '#fff'
        } : {
          color: 'transparent',
          background: 'transparent'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "mail"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "mail",
        name: "mail",
        type: "text",
        className: "green_input",
        placeholder: "Correo electronico",
        value: mail,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Popover"], {
        className: "popMsg",
        placement: "right",
        target: "mail",
        isOpen: mailPop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "La direccion de correo no es valida"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "input_cont",
        style: passPop ? {
          borderBottomColor: '#ff6c1a'
        } : {
          borderBottomColor: "#669f09"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "pass",
        style: passLabel ? {
          color: '#8bb940',
          background: '#fff'
        } : {
          color: 'transparent',
          background: 'transparent'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "pass"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "pass",
        name: "pass",
        type: "password",
        className: "green_input",
        placeholder: "Contrase\xF1a",
        value: pass,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Popover"], {
        className: "popMsg",
        placement: "right",
        target: "pass",
        isOpen: passPop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "La contrase\xF1a no es valida"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "entrar"))), fail && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fail__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "animated fadeInDown",
        text: "Correo o contrase\xF1a invalido",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), spinner && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userStore: state.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])({
    onUser: _store_actions__WEBPACK_IMPORTED_MODULE_18__["onUser"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(mapStateToProps, mapDispatchToProps)(Login));

/***/ })

})
//# sourceMappingURL=login.js.a37f72980b35c7d9645c.hot-update.js.map