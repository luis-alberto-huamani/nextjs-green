webpackHotUpdate("static/development/pages/store.js",{

/***/ "./pages/store.jsx":
/*!*************************!*\
  !*** ./pages/store.jsx ***!
  \*************************/
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
/* harmony import */ var _components_store_store_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/store/store.scss */ "./components/store/store.scss");
/* harmony import */ var _components_store_store_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_store_store_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/media/felix/projects/green/pages/store.jsx";









var CategoryButton = function CategoryButton(_ref) {
  var name = _ref.name,
      width = _ref.width,
      height = _ref.height,
      img = _ref.img,
      id = _ref.id,
      handleBlur = _ref.handleBlur,
      blur = _ref.blur;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "category_cont",
    style: {
      width: width,
      height: height
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()({
      category: true,
      blur: !blur
    }),
    style: {
      background: "url(\"".concat(img, "\") top center no-repeat"),
      backgroundSize: 'cover'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    id: id,
    onMouseOver: handleBlur,
    onMouseLeave: handleBlur,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, name));
};

var Store =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Store, _Component);

  function Store(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Store);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Store).call(this, props));
    _this.state = {
      musica: false,
      candy: false,
      bis: false,
      toy: false,
      ebook: false,
      tv: false
    };
    _this.onBlurImg = _this.onBlurImg.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Store, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.props.store;
      console.log(store);
    }
  }, {
    key: "onBlurImg",
    value: function onBlurImg(e) {
      var element = e.target.id;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, element, !this.state[element]));
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.props.store.visible;
      var onStore = this.props.onStore;
      var _this$state = this.state,
          musica = _this$state.musica,
          candy = _this$state.candy,
          bis = _this$state.bis,
          toy = _this$state.toy,
          ebook = _this$state.ebook,
          tv = _this$state.tv;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, console.log(musica), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].OPEN_STORE);
        },
        style: {
          marginTop: '3rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Moldal"), console.log(visible), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
        className: "my_modal",
        isOpen: visible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "store_main_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        className: "store_header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "main_store_nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "store_home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Inicio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "store_search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Buscar"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "store_search_bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].OPEN_STORE);
        },
        className: "store_close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "X")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "store_body container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "100%",
        height: "500px",
        img: "/static/musica-2.jpg",
        name: "Musica",
        id: "musica",
        handleBlur: this.onBlurImg,
        blur: musica,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "100%",
        height: "30%",
        img: "/static/candy-6.jpg",
        name: "Golosinas",
        id: "candy",
        handleBlur: this.onBlurImg,
        blur: candy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "four_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/jewel.jpg",
        name: "Bisuteria",
        id: "bis",
        handleBlur: this.onBlurImg,
        blur: bis,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/toys.jpg",
        name: "Juguetes",
        id: "toy",
        handleBlur: this.onBlurImg,
        blur: toy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "four_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/ebook-2.jpg",
        name: "Ebooks",
        id: "ebook",
        handleBlur: this.onBlurImg,
        blur: ebook,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/tv.jpg",
        name: "Tv's",
        id: "tv",
        handleBlur: this.onBlurImg,
        blur: tv,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }))))))));
    }
  }]);

  return Store;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
/*
                  <div className="category_cont">
                    <button onMouseOver={this.onBlurImg} onMouseLeave={this.onBlurImg} id="musica">Musica</button>
                    <div className={classnames({
                      category_musica: true,
                      blur: musica,
                    })} />
                  </div>
*/

var mapStateToProps = function mapStateToProps(state) {
  return {
    store: state.store
  };
};

var mapDispactchToProps = function mapDispactchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({
    onStore: _store_actions__WEBPACK_IMPORTED_MODULE_11__["onStore"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispactchToProps)(Store));

/***/ })

})
//# sourceMappingURL=store.js.6a643472383335a37a2b.hot-update.js.map