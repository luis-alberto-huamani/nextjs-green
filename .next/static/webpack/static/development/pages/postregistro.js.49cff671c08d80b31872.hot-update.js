webpackHotUpdate("static/development/pages/postregistro.js",{

/***/ "./components/postregistro/body.jsx":
/*!******************************************!*\
  !*** ./components/postregistro/body.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _body_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./body.scss */ "./components/postregistro/body.scss");
/* harmony import */ var _body_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_body_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./steps */ "./components/postregistro/steps.jsx");
/* harmony import */ var _step_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./step-1 */ "./components/postregistro/step-1.jsx");
/* harmony import */ var _step_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./step-2 */ "./components/postregistro/step-2.jsx");
/* harmony import */ var _step_3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./step-3 */ "./components/postregistro/step-3.jsx");
/* harmony import */ var _buttons_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../buttons/button */ "./components/buttons/button.jsx");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../spinner/spinner */ "./components/spinner/spinner.jsx");
/* harmony import */ var _greeting__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./greeting */ "./components/postregistro/greeting.jsx");







var _jsxFileName = "/media/felix/projects/green/components/postregistro/body.jsx";










var BodyPost =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(BodyPost, _Component);

  function BodyPost(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BodyPost);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(BodyPost).call(this, props));
    _this.state = {
      index: 1,
      step1: true,
      step1Out: false,
      perfilPic: null,
      name: '',
      lastName: '',
      history: '',
      birthday: '',
      interest: '',
      step2: false,
      step2Out: false,
      frontPic: null,
      frontQuote: '',
      step3: false,
      spinner: false,
      greetings: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleFile = _this.handleFile.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onNext = _this.onNext.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onCancel = _this.onCancel.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BodyPost, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleFile",
    value: function handleFile(e) {
      var _this2 = this;

      var element = e.target.id;
      var img = e.target.files[0];
      var reader = new FileReader();

      reader.onloadend = function () {
        _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, element, reader.result));
      };

      if (img) {
        reader.readAsDataURL(img);
      } else {
        this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.id, null));
      }
    }
  }, {
    key: "onNext",
    value: function onNext() {
      var _this3 = this;

      var index = this.state.index;

      if (index >= 3) {
        this.setState({
          index: 2
        });
      } else {
        this.setState({
          index: index + 1
        });
      }

      if (index === 2) {
        this.setState({
          step1Out: true
        });
        setTimeout(function () {
          _this3.setState({
            step1: false,
            step2: true
          });
        }, 300);
      }

      if (index === 3) {
        this.setState({
          step2Out: true
        });
        setTimeout(function () {
          _this3.setState({
            step2: false,
            step3: true
          });
        }, 300);
      }
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      this.setState({
        step1: true,
        step1Out: false,
        perfilPic: null,
        name: '',
        lastName: '',
        history: '',
        birthday: '',
        interest: '',
        step2Out: false,
        frontPic: null,
        frontQuote: '',
        step3: false
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this4 = this;

      var _this$state = this.state,
          perfilPic = _this$state.perfilPic,
          name = _this$state.name,
          lastName = _this$state.lastName,
          history = _this$state.history,
          birthday = _this$state.birthday,
          interest = _this$state.interest,
          frontPic = _this$state.frontPic,
          frontQuote = _this$state.frontQuote;
      var data = {
        perfilImg: perfilPic,
        name: name,
        lastName: lastName,
        history: history,
        birthday: birthday,
        interest: interest,
        frontPageImg: frontPic,
        frontPageQuote: frontQuote
      };
      this.setState({
        step3: false,
        spinner: true
      });
      setTimeout(function () {
        _this4.setState({
          spinner: false,
          greetings: true
        });
      }, 2000);
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$state2 = this.state,
          index = _this$state2.index,
          greetings = _this$state2.greetings,
          step1 = _this$state2.step1,
          step1Out = _this$state2.step1Out,
          perfilPic = _this$state2.perfilPic,
          name = _this$state2.name,
          lastName = _this$state2.lastName,
          history = _this$state2.history,
          birthday = _this$state2.birthday,
          interest = _this$state2.interest,
          step2 = _this$state2.step2,
          step2Out = _this$state2.step2Out,
          frontPic = _this$state2.frontPic,
          frontQuote = _this$state2.frontQuote,
          step3 = _this$state2.step3,
          spinner = _this$state2.spinner;
      var valuesStep1 = {
        perfilPic: perfilPic,
        name: name,
        lastName: lastName,
        history: history,
        birthday: birthday,
        interest: interest
      };
      var valuesStep2 = {
        frontPic: frontPic,
        frontQuote: frontQuote
      };
      var user = {
        perfilImg: perfilPic,
        name: name,
        lastName: lastName,
        history: history,
        birthday: birthday,
        interest: interest,
        frontPageImg: frontPic,
        frontPageQuote: frontQuote
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "postregistro_body_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, greetings && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_greeting__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), !spinner && !greetings && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_steps__WEBPACK_IMPORTED_MODULE_9__["default"], {
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), step1 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_step_1__WEBPACK_IMPORTED_MODULE_10__["default"], (_React$createElement = {
        out: step1Out,
        onChange: this.handleChange,
        onNext: this.onNext,
        onFile: this.handleFile,
        values: valuesStep1
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "onNext", this.onNext), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 175
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)), step2 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_step_2__WEBPACK_IMPORTED_MODULE_11__["default"], {
        out: step2Out,
        onChange: this.handleChange,
        onFile: this.handleFile,
        values: valuesStep2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), step3 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_step_3__WEBPACK_IMPORTED_MODULE_12__["default"], {
        user: user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      })), spinner && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginTop: "20vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      })), !spinner && !greetings && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, step3 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_buttons_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onClick: this.onCancel,
        color: "dark",
        size: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Cancelar"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_buttons_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onClick: this.onSubmit,
        color: "dark",
        size: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "Confirmar")) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_buttons_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onClick: this.onNext,
        color: "dark",
        size: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Siguiente")));
    }
  }]);

  return BodyPost;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BodyPost);

/***/ })

})
//# sourceMappingURL=postregistro.js.49cff671c08d80b31872.hot-update.js.map