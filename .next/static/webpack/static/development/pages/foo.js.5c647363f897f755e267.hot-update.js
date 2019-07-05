webpackHotUpdate("static/development/pages/foo.js",{

/***/ "./pages/foo.js":
/*!**********************!*\
  !*** ./pages/foo.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.jsx");
/* harmony import */ var _components_buttons_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/buttons/button */ "./components/buttons/button.jsx");
/* harmony import */ var _components_form_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/form/input */ "./components/form/input.jsx");
/* harmony import */ var _components_form_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/form/date */ "./components/form/date.jsx");
/* harmony import */ var _components_postregistro_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/postregistro/header */ "./components/postregistro/header.jsx");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/header/header */ "./components/header/header.jsx");







var _jsxFileName = "/media/felix/projects/green/pages/foo.js";








var Foo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Foo, _Component);

  function Foo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Foo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Foo).call(this, props));
    _this.state = {
      url: '',
      name: '',
      img: null
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onFile = _this.onFile.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Foo, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: "onFile",
    value: function onFile(e) {
      var _this2 = this;

      var reader = new FileReader();

      reader.onloadend = function () {
        _this2.setState({
          img: reader.result
        });

        console.log(_this2.state.img);
      };

      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var _this$state = this.state,
          img = _this$state.img,
          name = _this$state.name;
      var data = {
        img: img,
        name: name
      };
      var options = {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
      };
      fetch('http://localhost:4000/api/foo', options).then(function (res) {
        return res.json();
      }).then(function (res) {
        return console.log(res);
      });
      /*const data = new FormData();
      data.append('avatar', img);
      data.append('name', name);
      const options={
        method: 'POST',
        body: data,
      }
      console.log(data);
      fetch('http://localhost:4000/api/foo', options).then(res => res.json()).then(res => {
        this.setState({ url: res.img.path })
      });*/
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "postregistro_main_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        value: this.state.name,
        onChange: this.onChange,
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "avatar",
        onChange: this.onFile,
        type: "file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Enviar")));
    }
  }]);

  return Foo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Foo);

/***/ })

})
//# sourceMappingURL=foo.js.5c647363f897f755e267.hot-update.js.map