webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/hero/hero.jsx":
/*!**********************************!*\
  !*** ./components/hero/hero.jsx ***!
  \**********************************/
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
/* harmony import */ var _social_buttons_heart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../social-buttons/heart */ "./components/social-buttons/heart.jsx");
/* harmony import */ var _social_buttons_gift__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../social-buttons/gift */ "./components/social-buttons/gift.jsx");
/* harmony import */ var _social_buttons_comment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../social-buttons/comment */ "./components/social-buttons/comment.jsx");
/* harmony import */ var _social_buttons_share__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../social-buttons/share */ "./components/social-buttons/share.jsx");
/* harmony import */ var _buttons_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../buttons/button */ "./components/buttons/button.jsx");
/* harmony import */ var _register_cont__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register-cont */ "./components/hero/register-cont.jsx");
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../form/input */ "./components/form/input.jsx");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/functions */ "./utils/functions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hero.scss */ "./components/hero/hero.scss");
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_hero_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../spinner/spinner */ "./components/spinner/spinner.jsx");








var _jsxFileName = "/media/felix/projects/green/components/hero/hero.jsx";













var Hero =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Hero, _Component);

  function Hero(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Hero);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Hero).call(this, props));
    _this.state = {
      register: false,
      spinner: false,
      registerForm: true,
      mail: '',
      mailError: false,
      mailPop: false,
      pass: '',
      passPop: false
    };
    _this.onRegister = _this.onRegister.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Hero, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          register: true
        });
      }, 7000);
    }
  }, {
    key: "onRegister",
    value: function onRegister() {
      var register = this.state.register;
      this.setState({
        register: !register
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      var element = "".concat(e.target.id, "Pop");
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, element, false));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var _this$state = this.state,
          mail = _this$state.mail,
          pass = _this$state.pass;

      if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_16__["validateEmail"])(mail.trim().toLocaleLowerCase())) {
        this.setState({
          mailPop: true
        });
      } else if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_16__["validateEmpty"])(pass)) {
        this.setState({
          passPop: true
        });
      } else {
        var data = {
          mail: mail.trim().toLocaleLowerCase(),
          pass: pass
        };
        var options = {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
        };
        this.setState({
          spinner: true
        });
        fetch('/api/registro.js', options).then(function (res) {
          if (res.status === 201) {
            res.text().then(function (res) {
              next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/postregistro?id=".concat(res));
            });
          } else {
            _this3.setState({
              mailError: true,
              spinner: false
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          register = _this$state2.register,
          mail = _this$state2.mail,
          mailError = _this$state2.mailError,
          mailPop = _this$state2.mailPop,
          pass = _this$state2.pass,
          passPop = _this$state2.passPop,
          spinner = _this$state2.spinner;
      var arrowCircle = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        className: "next",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        d: "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }));
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "hero_main_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "vertical_text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "La unica red social donde puedes ganar regalos y criptomonedas mientras te diviertes y ayudas al planeta"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_register_cont__WEBPACK_IMPORTED_MODULE_14__["default"], {
        isOpen: register,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, !spinner && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "inputs_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "mail_cont_registro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_form_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "mail",
        type: "text",
        value: mail,
        pop: mailPop,
        popText: "El correo no es valido",
        color: "light",
        placeholder: "indique su direccion de correo",
        label: "Correo",
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        style: mailError ? {
          borderColor: 'red'
        } : {
          borderColor: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
        style: mailError ? {
          display: 'block'
        } : {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "El correo ya existe!")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_form_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "pass",
        type: "password",
        value: pass,
        pop: passPop,
        popText: "No puede estar vacio",
        color: "light",
        placeholder: "Contrase\xF1a",
        label: "Contrase\xF1a",
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        className: "btn_next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, arrowCircle)), spinner && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginTop: '25%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "social_nav_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        className: "social_nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_social_buttons_heart__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "fadeIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_social_buttons_share__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "fadeIn delay-1s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_social_buttons_gift__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "fadeIn delay-2s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_social_buttons_comment__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "fadeIn delay-3s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "msg_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "msg_cont-2 animated fadeIn delay-5s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_buttons_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onClick: this.onRegister,
        size: "lg",
        color: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Unete"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "A Greenlink")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "msg_cont-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "animated fadeIn delay-2s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Comparte"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "msg_complementary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "animated fadeIn delay-3s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Disfruta,"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "animated fadeIn delay-4s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Diviertete,"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "animated fadeIn delay-5s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Gana greencoins"))))))));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.7966af132948c860bf1a.hot-update.js.map