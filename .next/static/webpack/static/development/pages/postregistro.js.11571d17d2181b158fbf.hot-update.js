webpackHotUpdate("static/development/pages/postregistro.js",{

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
    label: "nombre",
    color: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Historia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    name: "history",
    id: "history",
    value: values.history,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "birthday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_date__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "birthday",
    value: values.birthday,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "intereses",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Interes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: "indefinido",
    onChange: onChange,
    name: "intereses",
    id: "interest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "muejeres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Mujeres"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "hombres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Hombres"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "ambos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Ambos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "otros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Otros")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Step1);

/***/ })

})
//# sourceMappingURL=postregistro.js.11571d17d2181b158fbf.hot-update.js.map