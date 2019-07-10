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
      blur = _ref.blur,
      onClick = _ref.onClick;
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
    onClick: onClick,
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
      musicaState: false,
      candyState: false,
      bisState: false,
      toyState: false,
      ebookState: false,
      tvState: false
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
      var _this$props$store = this.props.store,
          visible = _this$props$store.visible,
          home = _this$props$store.home,
          musica = _this$props$store.musica,
          bisuteria = _this$props$store.bisuteria,
          juguete = _this$props$store.juguete,
          golosina = _this$props$store.golosina,
          ebook = _this$props$store.ebook,
          tv = _this$props$store.tv;
      var onStore = this.props.onStore;
      var _this$state = this.state,
          musicaState = _this$state.musicaState,
          candyState = _this$state.candyState,
          bisState = _this$state.bisState,
          toyState = _this$state.toyState,
          ebookState = _this$state.ebookState,
          tvState = _this$state.tvState;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].OPEN_STORE);
        },
        style: {
          marginTop: '3rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Moldal"), console.log(home), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
        className: "my_modal",
        isOpen: visible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "store_main_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        className: "store_header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "main_store_nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].HOME);
        },
        className: "store_home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Inicio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "store_search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Buscar"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "store_search_bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].OPEN_STORE);
        },
        className: "store_close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "X")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "store_body container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, home && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "100%",
        height: "500px",
        img: "/static/musica-2.jpg",
        name: "Musica",
        id: "musicaState",
        handleBlur: this.onBlurImg,
        blur: musicaState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].MUSICA);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "100%",
        height: "30%",
        img: "/static/candy-6.jpg",
        name: "Golosinas",
        id: "candyState",
        handleBlur: this.onBlurImg,
        blur: candyState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].GOLOSINA);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "four_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/jewel.jpg",
        name: "Bisuteria",
        id: "bisState",
        handleBlur: this.onBlurImg,
        blur: bisState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].BISUTERIA);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/toys.jpg",
        name: "Juguetes",
        id: "toyState",
        handleBlur: this.onBlurImg,
        blur: toyState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].JUGUETE);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "four_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/ebook-2.jpg",
        name: "Ebooks",
        id: "ebookState",
        handleBlur: this.onBlurImg,
        blur: ebookState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].EBOOK);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/tv.jpg",
        name: "Tv's",
        id: "tvState",
        handleBlur: this.onBlurImg,
        blur: tvState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_11__["storeSections"].TV);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      })))), musica.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, musica.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          ley: item.id,
          className: "product_cont shadow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: item.url,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, item.price)));
      })), golosina.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, golosina.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          ley: item.id,
          className: "product_cont shadow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: item.url,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, item.price)));
      })), bisuteria.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, bisuteria.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          ley: item.id,
          className: "product_cont shadow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: item.url,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, item.price)));
      })), juguete.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, juguete.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          ley: item.id,
          className: "product_cont shadow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: item.url,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, item.price)));
      })), ebook.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, ebook.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          ley: item.id,
          className: "product_cont shadow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: item.url,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, item.price)));
      })), tv.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, tv.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          ley: item.id,
          className: "product_cont shadow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: item.url,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }, item.price)));
      }))))));
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
//# sourceMappingURL=store.js.523fae57ad4feecb7856.hot-update.js.map