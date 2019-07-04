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
      step1: false,
      perfilPic: null,
      history: '',
      birthday: '',
      interest: '',
      step2: true,
      frontPic: null
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

      element = e.target.id;
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
    value: function onNext(i) {
      var _this3 = this;

      if (i === 2) {
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
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement,
          _this4 = this;

      var _this$state = this.state,
          step1 = _this$state.step1,
          step1Out = _this$state.step1Out,
          perfilPic = _this$state.perfilPic,
          history = _this$state.history,
          birthday = _this$state.birthday,
          interest = _this$state.interest,
          step2 = _this$state.step2,
          frontPic = _this$state.frontPic;
      var valuesStep1 = {
        perfilPic: perfilPic,
        history: history,
        birthday: birthday,
        interest: interest
      };
      var valuesStep2 = {
        frontPic: frontPic
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "postregistro_body_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_steps__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
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
        lineNumber: 78
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)), step2 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_step_2__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onFile: this.handleFile,
        values: valuesStep2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_buttons_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: function onClick() {
          return _this4.onNext(2);
        },
        color: "dark",
        size: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
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
//# sourceMappingURL=postregistro.js.2c12054bcd9a1891afc7.hot-update.js.map