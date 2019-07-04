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
/* harmony import */ var _buttons_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../buttons/button */ "./components/buttons/button.jsx");







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
      index: 2,
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
      frontQuote: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleFile = _this.handleFile.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onNext = _this.onNext.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
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
      this.setState({
        index: index + 1
      });

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
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$state = this.state,
          step1 = _this$state.step1,
          step1Out = _this$state.step1Out,
          perfilPic = _this$state.perfilPic,
          name = _this$state.name,
          lastName = _this$state.lastName,
          history = _this$state.history,
          birthday = _this$state.birthday,
          interest = _this$state.interest,
          step2 = _this$state.step2,
          step2Out = _this$state.step2Out,
          frontPic = _this$state.frontPic,
          frontQuote = _this$state.frontQuote;
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
      var user = {};
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "postregistro_body_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_steps__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
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
        lineNumber: 102
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)), step2 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_step_2__WEBPACK_IMPORTED_MODULE_11__["default"], {
        out: step2Out,
        onChange: this.handleChange,
        onFile: this.handleFile,
        values: valuesStep2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_buttons_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.onNext,
        color: "dark",
        size: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Siguiente")));
    }
  }]);

  return BodyPost;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BodyPost);

/***/ }),

/***/ "./components/postregistro/step-1.jsx":
/*!********************************************!*\
  !*** ./components/postregistro/step-1.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _step_1_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-1.scss */ "./components/postregistro/step-1.scss");
/* harmony import */ var _step_1_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_step_1_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _perfil_pic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil-pic */ "./components/postregistro/perfil-pic.jsx");
/* harmony import */ var _buttons_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons/button */ "./components/buttons/button.jsx");
/* harmony import */ var _form_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/date */ "./components/form/date.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form/input */ "./components/form/input.jsx");
var _jsxFileName = "/media/felix/projects/green/components/postregistro/step-1.jsx";








var Step1 = function Step1(_ref) {
  var onChange = _ref.onChange,
      values = _ref.values,
      onNext = _ref.onNext,
      onFile = _ref.onFile,
      out = _ref.out;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      step1_main_cont: true,
      animated: true,
      fadeOutLeft: out
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_perfil_pic__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onFile: onFile,
    pic: values.perfilPic,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8  animated fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "historia_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "name",
    value: values.name,
    label: "nombre",
    color: "dark",
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: values.lastName,
    id: "lastName",
    label: "Apellido",
    color: "dark",
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Historia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    name: "history",
    id: "history",
    value: values.history,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "birthday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_date__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "birthday",
    value: values.birthday,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "intereses",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Interes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: "indefinido",
    onChange: onChange,
    name: "intereses",
    id: "interest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "muejeres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Mujeres"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "hombres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Hombres"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ambos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Ambos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "otros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Otros")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Step1);

/***/ })

})
//# sourceMappingURL=postregistro.js.9c3f35f5f75a49a92ad4.hot-update.js.map