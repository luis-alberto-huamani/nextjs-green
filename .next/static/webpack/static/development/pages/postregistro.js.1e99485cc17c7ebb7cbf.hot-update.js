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
        }, 200);
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
        }, 200);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$state = this.state,
          index = _this$state.index,
          step1 = _this$state.step1,
          step1Out = _this$state.step1Out,
          perfilPic = _this$state.perfilPic,
          history = _this$state.history,
          birthday = _this$state.birthday,
          interest = _this$state.interest,
          step2 = _this$state.step2,
          step2Out = _this$state.step2Out,
          frontPic = _this$state.frontPic,
          frontQuote = _this$state.frontQuote;
      var valuesStep1 = {
        perfilPic: perfilPic,
        history: history,
        birthday: birthday,
        interest: interest
      };
      var valuesStep2 = {
        frontPic: frontPic,
        frontQuote: frontQuote
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "postregistro_body_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_steps__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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
        lineNumber: 94
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)), step2 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_step_2__WEBPACK_IMPORTED_MODULE_11__["default"], {
        out: step2Out,
        onChange: this.handleChange,
        onFile: this.handleFile,
        values: valuesStep2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_buttons_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.onNext,
        color: "dark",
        size: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Siguiente")));
    }
  }]);

  return BodyPost;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BodyPost);

/***/ }),

/***/ "./components/postregistro/step-2.jsx":
/*!********************************************!*\
  !*** ./components/postregistro/step-2.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _step_2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-2.scss */ "./components/postregistro/step-2.scss");
/* harmony import */ var _step_2_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_step_2_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _perfil_header_perfil_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perfil-header/perfil-header */ "./components/perfil-header/perfil-header.jsx");
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/input */ "./components/form/input.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/media/felix/projects/green/components/postregistro/step-2.jsx";





var user = {
  name: 'felix',
  lastMame: 'tineo',
  perfilImg: '',
  frontPageImg: '',
  frontPageQuote: ''
};

var Step2 = function Step2(_ref) {
  var onFile = _ref.onFile,
      values = _ref.values,
      onChange = _ref.onChange,
      out = _ref.out;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      step2_main_cont: true,
      animated: true,
      fadeInRight: !out,
      fadeInLeft: out
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "portada_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Portada"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "frontPic_main_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "frontPic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, values.frontPic === null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M384 121.941V128H256V0h6.059a24 24 0 0 1 16.97 7.029l97.941 97.941a24.002 24.002 0 0 1 7.03 16.971zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.491-48 48-48zm208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368 264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304v112z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: values.frontPic,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: onFile,
    name: "frontPic",
    id: "frontPic",
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " col-12 my_input_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "dark",
    label: "Frase",
    id: "frontQuote",
    type: "text",
    onChange: onChange,
    value: values.frontQuote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Step2);

/***/ })

})
//# sourceMappingURL=postregistro.js.1e99485cc17c7ebb7cbf.hot-update.js.map