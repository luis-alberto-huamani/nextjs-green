module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+KcL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "+e4n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DBpT");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "01UH":
/***/ (function(module, exports) {



/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("HDbY");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("Dlbr"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("5USZ"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("VRgH"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("vTIt"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("6hsp"));

var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("3+Pc"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) { var name; }

  return WithRouteWrapper;
}

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "3+Pc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("+KcL");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "43tM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("qzSc");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("avu+");
/* harmony import */ var _store_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_store_scss__WEBPACK_IMPORTED_MODULE_13__);















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
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()({
      category: true,
      blur: !blur
    }),
    style: {
      background: "url(\"".concat(img, "\") top center no-repeat"),
      backgroundSize: 'cover'
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    onClick: onClick,
    id: id,
    onMouseOver: handleBlur,
    onMouseLeave: handleBlur
  }, name));
};

var Store =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Store, _Component);

  function Store(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Store);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Store).call(this, props));
    _this.state = {
      musicaState: false,
      candyState: false,
      bisState: false,
      toyState: false,
      ebookState: false,
      tvState: false,
      productCurrent: {
        id: 'uuid()',
        tag: 'musica',
        name: 'item-1',
        url: '/static/musica/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }
    };
    _this.onBlurImg = _this.onBlurImg.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this));
    _this.handleProduct = _this.handleProduct.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Store, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.props.store;
    }
  }, {
    key: "onBlurImg",
    value: function onBlurImg(e) {
      var element = e.target.id;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, element, !this.state[element]));
    }
  }, {
    key: "handleProduct",
    value: function handleProduct(item) {
      var onStore = this.props.onStore;
      onStore(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* storeSections */ "j"].PRODUCT_INFO);
      this.setState({
        productCurrent: item
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$store = this.props.store,
          visible = _this$props$store.visible,
          home = _this$props$store.home,
          productInfo = _this$props$store.productInfo,
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
          tvState = _this$state.tvState,
          productCurrent = _this$state.productCurrent;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
        className: "my_modal",
        isOpen: visible
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "store_main_cont"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        className: "store_header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "main_store_nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* storeSections */ "j"].HOME);
        },
        className: "store_home"
      }, "Inicio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "store_search"
      }, "Buscar"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "store_search_bar"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* storeSections */ "j"].OPEN_STORE);
        },
        className: "store_close"
      }, "X")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "store_body container-fluid"
      }, home && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "100%",
        height: "500px",
        img: "/static/musica-2.jpg",
        name: "Musica",
        id: "musicaState",
        handleBlur: this.onBlurImg,
        blur: musicaState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* storeSections */ "j"].MUSICA);
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-8"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "100%",
        height: "30%",
        img: "/static/candy-6.jpg",
        name: "Golosinas",
        id: "candyState",
        handleBlur: this.onBlurImg,
        blur: candyState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* storeSections */ "j"].GOLOSINA);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "four_cont"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/jewel.jpg",
        name: "Bisuteria",
        id: "bisState",
        handleBlur: this.onBlurImg,
        blur: bisState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* storeSections */ "j"].BISUTERIA);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/toys.jpg",
        name: "Juguetes",
        id: "toyState",
        handleBlur: this.onBlurImg,
        blur: toyState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* storeSections */ "j"].JUGUETE);
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "four_cont"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/ebook-2.jpg",
        name: "Ebooks",
        id: "ebookState",
        handleBlur: this.onBlurImg,
        blur: ebookState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* storeSections */ "j"].EBOOK);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryButton, {
        width: "50%",
        height: "100%",
        img: "/static/tv.jpg",
        name: "Tv's",
        id: "tvState",
        handleBlur: this.onBlurImg,
        blur: tvState,
        onClick: function onClick() {
          return onStore(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* storeSections */ "j"].TV);
        }
      })))), productInfo && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "product_current_cont container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "img-fluid",
        src: productCurrent.url,
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "product_description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, productCurrent.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, productCurrent.description), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "product_footer"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, productCurrent.price), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", null, "Comprar")))))), musica.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont"
      }, musica.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: item.id,
          className: "product_cont shadow"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          id: item.id,
          onClick: function onClick() {
            return _this2.handleProduct(item);
          },
          src: item.url,
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.price)));
      })), golosina.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont"
      }, golosina.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: item.id,
          className: "product_cont shadow"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          id: item.id,
          onClick: function onClick() {
            return _this2.handleProduct(item);
          },
          src: item.url,
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.price)));
      })), bisuteria.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont"
      }, bisuteria.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: item.id,
          className: "product_cont shadow"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          id: item.id,
          onClick: function onClick() {
            return _this2.handleProduct(item);
          },
          src: item.url,
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.price)));
      })), juguete.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont"
      }, juguete.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: item.id,
          className: "product_cont shadow"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          id: item.id,
          onClick: function onClick() {
            return _this2.handleProduct(item);
          },
          src: item.url,
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.price)));
      })), ebook.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont"
      }, ebook.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: item.id,
          className: "product_cont shadow"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          id: item.id,
          onClick: function onClick() {
            return _this2.handleProduct(item);
          },
          src: item.url,
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.price)));
      })), tv.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "products_cont"
      }, tv.items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: item.id,
          className: "product_cont shadow"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "product"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          id: item.id,
          onClick: function onClick() {
            return _this2.handleProduct(item);
          },
          src: item.url,
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "product_info"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, item.price)));
      }))))));
    }
  }]);

  return Store;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return {
    store: state.store
  };
};

var mapDispactchToProps = function mapDispactchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])({
    onStore: _store_actions__WEBPACK_IMPORTED_MODULE_10__[/* onStore */ "h"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispactchToProps)(Store));

/***/ }),

/***/ "5USZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9f0s");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "6hsp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8JIA");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+e4n");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mpiI");


/***/ }),

/***/ "7TdG":
/***/ (function(module, exports) {



/***/ }),

/***/ "7ntV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "8JIA":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "9f0s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "BIZ9":
/***/ (function(module, exports) {



/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "CUYq":
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ }),

/***/ "DBpT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "DOPR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dlbr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "HDbY":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "OzcY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aAV7");

/***/ }),

/***/ "Q+3P":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "Q51C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BIZ9");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var Button = function Button(_ref) {
  var id = _ref.id,
      color = _ref.color,
      size = _ref.size,
      onClick = _ref.onClick,
      type = _ref.type,
      children = _ref.children,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my_button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: id,
    title: title,
    color: color,
    onClick: onClick,
    type: type,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      my_button: true,
      md: size === "md",
      lg: size === "lg",
      light: color === "light",
      dark: color === "dark"
    })
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "Q5zs":
/***/ (function(module, exports) {



/***/ }),

/***/ "R/PV":
/***/ (function(module, exports) {



/***/ }),

/***/ "SD04":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "VRgH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("p1Ve");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Q+3P");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZTmz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/buttons/button.jsx
var buttons_button = __webpack_require__("Q51C");

// EXTERNAL MODULE: ./components/logo-2/logo.jsx
var logo = __webpack_require__("s1/B");

// EXTERNAL MODULE: ./components/header/header.scss
var header = __webpack_require__("7TdG");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__("qzSc");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/btn-resp/popOver.scss
var popOver = __webpack_require__("01UH");

// CONCATENATED MODULE: ./components/btn-resp/popOver.jsx














var popOver_PopOver =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PopOver, _Component);

  function PopOver(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PopOver);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PopOver).call(this, props));
    _this.logOut = _this.logOut.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PopOver, [{
    key: "logOut",
    value: function logOut() {
      var onLogin = this.props.onLogin;
      window.location = '/';
      localStorage.removeItem('id');
      onLogin(false);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_reactstrap_["Popover"], {
        placement: "bottom",
        target: "btn-resp",
        toggle: this.toggle,
        isOpen: this.props.popOpen
      }, external_react_default.a.createElement(external_reactstrap_["PopoverBody"], null, external_react_default.a.createElement("ul", {
        className: "popOver_nav"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/editar/perfil"
      }, external_react_default.a.createElement("a", null, "Editar"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/perfil/config"
      }, external_react_default.a.createElement("a", null, "Config"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("button", {
        onClick: this.logOut
      }, "Salir")))));
    }
  }]);

  return PopOver;
}(external_react_["Component"]);

var popOver_mapDispatcToProps = function mapDispatcToProps(dispatch) {
  return Object(external_redux_["bindActionCreators"])({
    onLogin: actions["f" /* onLogin */]
  }, dispatch);
};

/* harmony default export */ var btn_resp_popOver = (Object(external_react_redux_["connect"])(null, popOver_mapDispatcToProps)(popOver_PopOver));
// EXTERNAL MODULE: ./components/notifications/notifications.scss
var notifications_notifications = __webpack_require__("ZaQC");

// EXTERNAL MODULE: external "uuid/v1"
var v1_ = __webpack_require__("CUYq");
var v1_default = /*#__PURE__*/__webpack_require__.n(v1_);

// CONCATENATED MODULE: ./components/notifications/notifications.jsx












var notifications_Notifications =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Notifications, _Component);

  function Notifications(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Notifications);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Notifications).call(this, props));
    _this.state = {
      heartPop: false,
      giftPop: false,
      friendPop: false
    };
    _this.handlePop = _this.handlePop.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Notifications, [{
    key: "handlePop",
    value: function handlePop(e) {
      var _this$state = this.state,
          heartPop = _this$state.heartPop,
          giftPop = _this$state.giftPop,
          friendPop = _this$state.friendPop;

      switch (e.target.id) {
        case 'heart':
          console.log(e.target.id);
          this.setState({
            heartPop: !heartPop,
            friendPop: false,
            giftPop: false
          });
          break;

        case 'gift':
          console.log(e.target.id);
          this.setState({
            heartPop: false,
            friendPop: false,
            giftPop: !giftPop
          });
          break;

        case 'friend':
          console.log(e.target.id);
          this.setState({
            heartPop: false,
            friendPop: !friendPop,
            giftPop: false
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          heartPop = _this$state2.heartPop,
          friendPop = _this$state2.friendPop,
          giftPop = _this$state2.giftPop;
      var heart = external_react_default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, external_react_default.a.createElement("path", {
        id: "heart",
        d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
      }));
      var gift = external_react_default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, external_react_default.a.createElement("path", {
        id: "gift",
        d: "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
      }));
      var friendReq = external_react_default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512"
      }, external_react_default.a.createElement("path", {
        id: "friend",
        d: "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
      }));
      var notes = this.props.notes;
      return external_react_default.a.createElement("div", {
        className: "notifications_cont"
      }, external_react_default.a.createElement("div", {
        className: "btn_not_cont"
      }, external_react_default.a.createElement("button", {
        onClick: this.handlePop
      }, heart), external_react_default.a.createElement("span", null, notes.heart), external_react_default.a.createElement(external_reactstrap_["Popover"], {
        placement: "bottom",
        target: "heart",
        isOpen: heartPop
      }, external_react_default.a.createElement(external_reactstrap_["PopoverBody"], null, external_react_default.a.createElement("ul", {
        style: {
          listStyle: "none",
          margin0: 0,
          padding: 0
        }
      }, external_react_default.a.createElement("li", null, "jhon comento tu estado"), external_react_default.a.createElement("li", null, "sophie le gusta estado"), external_react_default.a.createElement("li", null, "homer te envio un beso"))))), external_react_default.a.createElement("div", {
        className: "btn_not_cont"
      }, external_react_default.a.createElement("button", {
        onClick: this.handlePop
      }, gift), external_react_default.a.createElement("span", null, notes.gifts), external_react_default.a.createElement(external_reactstrap_["Popover"], {
        placement: "bottom",
        target: "gift",
        isOpen: giftPop
      }, external_react_default.a.createElement(external_reactstrap_["PopoverBody"], null, external_react_default.a.createElement("ul", {
        style: {
          listStyle: "none",
          margin0: 0,
          padding: 0
        }
      }, external_react_default.a.createElement("li", null, "jhon te envio un snickers"), external_react_default.a.createElement("li", null, "sophie te envio un cramel"), external_react_default.a.createElement("li", null, "homer te envio una cerveza"))))), external_react_default.a.createElement("div", {
        className: "btn_not_cont"
      }, external_react_default.a.createElement("button", {
        onClick: this.handlePop
      }, friendReq), external_react_default.a.createElement("span", null, notes.friendReq.length), external_react_default.a.createElement(external_reactstrap_["Popover"], {
        placement: "bottom",
        target: "friend",
        isOpen: friendPop
      }, external_react_default.a.createElement(external_reactstrap_["PopoverBody"], null, external_react_default.a.createElement("ul", {
        style: {
          listStyle: "none",
          margin0: 0,
          padding: 0
        }
      }, notes.friendReq.map(function (item) {
        return external_react_default.a.createElement("li", {
          key: v1_default()()
        }, external_react_default.a.createElement("a", {
          href: item.url
        }, item.fullName));
      }))))));
    }
  }]);

  return Notifications;
}(external_react_["Component"]);

;
/* harmony default export */ var components_notifications_notifications = (notifications_Notifications);
// CONCATENATED MODULE: ./components/btn-resp/css-layout.jsx
var normalize = function normalize() {
  return "margin: 0; padding: 0; box-sizing: border-box;";
};
var color = {
  prim: "#669f09",
  sec: "#8bb940",
  tri: "#007f1a",
  danger: "#ff6c1a",
  alert: "#f9e453",
  gray1: "#ffffff80",
  gradient: function gradient(deg) {
    return "linear-gradient(".concat(deg, "deg,#669f09, #8bb940, #007f1a)");
  }
};
var font = {
  text: 'Open Sans',
  title: 'Sansita'
};
var sizes = {
  xl: '72px',
  lg: '48px',
  mdLg: '36px',
  md: '24px',
  normal: '18px',
  normalMd: '16px',
  sm: '14px',
  xs: '11px'
};
// CONCATENATED MODULE: ./components/header/header.jsx




















var iconBars = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512",
  className: style_default.a.dynamic([["3976290093", [color.danger]]])
}, external_react_default.a.createElement(style_default.a, {
  id: "3976290093",
  dynamic: [color.danger]
}, ["svg.__jsx-style-dynamic-selector{fill:#fff;width:20px;border:#fff;padding:3px;-webkit-transition:ease .5s;transition:ease .5s;}", "svg.__jsx-style-dynamic-selector:hover{fill:".concat(color.danger, ";background:#fff;}")]), external_react_default.a.createElement("path", {
  d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
  className: style_default.a.dynamic([["3976290093", [color.danger]]])
}));

var header_Header =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Header, _Component);

  function Header(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Header);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Header).call(this, props));
    _this.state = {
      isLogin: true,
      down: false,
      notifications: {
        heart: 1,
        gifts: 2,
        friendReq: [1, 2]
      },
      lookup: []
    };
    _this.onSearch = _this.onSearch.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var id = localStorage.getItem('id');
      var onLogin = this.props.onLogin;

      if (id) {
        fetch("/api/notifications.js?id=".concat(id)).then(function (res) {
          return res.json();
        }).then(function (res) {
          onLogin(true);

          _this2.setState({
            notifications: res
          });
        });
      }

      window.onscroll = function () {
        if (window.scrollY > 30) {
          _this2.setState({
            down: true
          });
        } else {
          _this2.setState({
            down: false
          });
        }
      };
    }
  }, {
    key: "onSearch",
    value: function onSearch(e) {
      var _this3 = this;

      var searchBar = this.state.notifications.searchBar;
      var userInput = e.target.value;

      if (userInput) {
        fetch("/api/search/".concat(userInput)).then(function (res) {
          return res.json();
        }).then(function (res) {
          return _this3.setState({
            lookup: res
          });
        });
      } else {
        this.setState({
          lookup: []
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          down = _this$state.down,
          notifications = _this$state.notifications,
          lookup = _this$state.lookup;
      var isLogin = this.props.isLogin;
      return external_react_default.a.createElement("header", {
        className: external_classnames_default()({
          scroll_header: down || isLogin,
          header_hero_main: true,
          shadow: down
        })
      }, external_react_default.a.createElement("div", {
        className: "container-fluid header_main_cont animated fadeInDown"
      }, external_react_default.a.createElement(logo["a" /* default */], null), isLogin && external_react_default.a.createElement("div", {
        className: "serachBar_cont"
      }, external_react_default.a.createElement("input", {
        type: "text",
        placeholder: "Buscar",
        onChange: this.onSearch
      }), lookup.length > 0 && external_react_default.a.createElement("ul", {
        className: "lookup_cont"
      }, lookup.map(function (item) {
        return external_react_default.a.createElement("li", {
          key: v1_default()()
        }, external_react_default.a.createElement(link_default.a, {
          href: item.url
        }, external_react_default.a.createElement("a", null, item.fullName)));
      }))), external_react_default.a.createElement("nav", null, isLogin ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_notifications_notifications, {
        notes: notifications
      }), external_react_default.a.createElement("button", {
        style: {
          background: "transparent",
          border: "none"
        },
        onClick: this.props.onNav,
        id: "btn-resp",
        type: "button",
        className: "jsx-3521646900"
      }, iconBars, external_react_default.a.createElement(style_default.a, {
        id: "3521646900"
      }, ["button.jsx-3521646900:focus{outline:none;}"])), external_react_default.a.createElement(btn_resp_popOver, {
        popOpen: this.props.nav
      })) : external_react_default.a.createElement(link_default.a, {
        href: "/login"
      }, external_react_default.a.createElement("button", {
        className: "btn_login",
        color: "light"
      }, "Login")))));
    }
  }]);

  return Header;
}(external_react_["Component"]);

;

var header_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(external_redux_["bindActionCreators"])({
    onNav: actions["g" /* onNav */],
    onLogin: actions["f" /* onLogin */]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLogin: state.login,
    nav: state.nav
  };
};

/* harmony default export */ var header_header = (Object(external_react_redux_["connect"])(mapStateToProps, header_mapDispatchToProps)(header_Header));
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./layout/base.scss
var base = __webpack_require__("R/PV");

// EXTERNAL MODULE: ./components/store/store.jsx
var store = __webpack_require__("43tM");

// CONCATENATED MODULE: ./components/layout/layout.jsx






var layout_Layout = function Layout(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", {
    className: "layout_cont"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), external_react_default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/animate.min.css"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans|Pacifico&display=swap",
    rel: "stylesheet"
  }), external_react_default.a.createElement("title", null, "Greenlink | Comparte con los tuyos")), external_react_default.a.createElement(store["a" /* default */], null), external_react_default.a.createElement(header_header, null), children);
};

/* harmony default export */ var layout = __webpack_exports__["a"] = (layout_Layout);

/***/ }),

/***/ "ZaQC":
/***/ (function(module, exports) {



/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aAV7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "avu+":
/***/ (function(module, exports) {



/***/ }),

/***/ "b8xp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OzcY");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+e4n");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "bIOf":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("7ntV");

var _Object$defineProperty = __webpack_require__("9f0s");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("HDbY");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("Dlbr"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("5USZ"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("VRgH"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("vTIt"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("6hsp"));

var _interopRequireWildcard = __webpack_require__("bIOf");

var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__("SD04"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.cleanUpListeners = function () {};
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (false) { var exact, warn; }

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "mpiI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./components/wall/main.scss
var main = __webpack_require__("Q5zs");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/wall/main.jsx









var userStar = {
  id: '987456321',
  fullName: 'Gloria World',
  perfilImg: '/static/star.jpg'
};
var myUsers = [{
  id: '1234561',
  url: '/kadkans',
  fullName: 'jhon doe',
  perfilImg: '/static/friend-1.jpg',
  frontPageQuote: 'Debemos cuidar el mundo, yo siemre reciclo mis latas de cerveza'
}, {
  id: '1234562',
  url: '/kadkans',
  fullName: 'sacha gray',
  perfilImg: '/static/friend-2.jpg',
  frontPageQuote: 'En el set de grabacion todos los condones se reciclan'
}, {
  id: '1234563',
  url: '/kadkans',
  fullName: 'rachel star',
  perfilImg: '/static/friend-3.jpg',
  frontPageQuote: 'Debemos cuidar nuestras playas para evitar el sifilis'
}];

var main_Main =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Main, _Component);

  function Main(props) {
    Object(classCallCheck["a" /* default */])(this, Main);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Main).call(this, props));
  }

  Object(createClass["a" /* default */])(Main, [{
    key: "render",
    value: function render() {
      var artid = '1234566';
      return external_react_default.a.createElement("main", {
        className: "container-fluid"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-12 promotion_cont shadow animated fadeIn"
      }, external_react_default.a.createElement("div", {
        className: "right animated fadeInLeft delay-1s"
      }, external_react_default.a.createElement("h1", {
        className: "pro_msg_right"
      }, "PART")), external_react_default.a.createElement("div", {
        className: "left animated fadeInRight delay-1s"
      }, external_react_default.a.createElement("h1", {
        className: "pro_msg_left"
      }, "ICIPA"), external_react_default.a.createElement("p", null, "Gana entradas para el cine solo por compartir y recibir likes. Animate!"), external_react_default.a.createElement("div", {
        className: "animations"
      }, external_react_default.a.createElement("svg", {
        id: "star_1",
        className: "star_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, external_react_default.a.createElement("path", {
        d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      })), external_react_default.a.createElement("svg", {
        id: "star_2",
        className: "star_2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, external_react_default.a.createElement("path", {
        d: "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
      })), external_react_default.a.createElement("svg", {
        id: "star_3",
        className: "star_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, external_react_default.a.createElement("path", {
        d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      })), external_react_default.a.createElement("svg", {
        id: "star_4",
        className: "star_2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, external_react_default.a.createElement("path", {
        d: "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
      })), external_react_default.a.createElement("svg", {
        id: "star_5",
        className: "star_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, external_react_default.a.createElement("path", {
        d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      })), external_react_default.a.createElement("svg", {
        id: "star_6",
        className: "star_2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, external_react_default.a.createElement("path", {
        d: "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
      })), external_react_default.a.createElement("svg", {
        id: "star_7",
        className: "star_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, external_react_default.a.createElement("path", {
        d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      })), external_react_default.a.createElement("svg", {
        id: "star_8",
        className: "star_2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, external_react_default.a.createElement("path", {
        d: "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
      })), external_react_default.a.createElement("svg", {
        className: "amp_voice",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, external_react_default.a.createElement("path", {
        d: "M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"
      })), external_react_default.a.createElement("svg", {
        className: "emoji",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 496 512"
      }, external_react_default.a.createElement("path", {
        d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm33.8 189.7l80-48c11.6-6.9 24 7.7 15.4 18L343.6 208l33.6 40.3c8.7 10.4-3.9 24.8-15.4 18l-80-48c-7.7-4.7-7.7-15.9 0-20.6zm-163-30c-8.6-10.3 3.8-24.9 15.4-18l80 48c7.8 4.7 7.8 15.9 0 20.6l-80 48c-11.5 6.8-24-7.6-15.4-18l33.6-40.3-33.6-40.3zM248 432c-60.6 0-134.5-38.3-143.8-93.3-2-11.9 9.4-21.6 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.5-3.7 22.6 6.2 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3z"
      })), external_react_default.a.createElement("svg", {
        className: "emoji",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 496 512"
      }, external_react_default.a.createElement("path", {
        d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM94.6 168.9l34.9-5 15.5-31.6c2.9-5.8 11-5.8 13.9 0l15.5 31.6 34.9 5c6.2 1 8.9 8.6 4.3 13.2l-25.4 24.6 6 34.9c1 6.2-5.3 11-11 7.9L152 233.3l-31.3 16.3c-5.7 3.1-12-1.7-11-7.9l6-34.9-25.4-24.6c-4.6-4.7-1.9-12.3 4.3-13.3zM248 432c-60.6 0-134.5-38.3-143.8-93.3-2-11.8 9.3-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.5-3.7 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3zm157.7-249.9l-25.4 24.6 6 34.9c1 6.2-5.3 11-11 7.9L344 233.3l-31.3 16.3c-5.7 3.1-12-1.7-11-7.9l6-34.9-25.4-24.6c-4.5-4.6-1.9-12.2 4.3-13.2l34.9-5 15.5-31.6c2.9-5.8 11-5.8 13.9 0l15.5 31.6 34.9 5c6.3.9 9 8.5 4.4 13.1z"
      })), external_react_default.a.createElement("svg", {
        className: "emoji",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, external_react_default.a.createElement("path", {
        d: "M409.6 111.9c22.6-3.2 73.5-12 88.3-26.8 19.2-19.2 18.9-50.6-.7-70.2S446-5 426.9 14.2c-14.8 14.8-23.5 65.7-26.8 88.3-.8 5.5 3.9 10.2 9.5 9.4zM102.4 400.1c-22.6 3.2-73.5 12-88.3 26.8-19.1 19.1-18.8 50.6.8 70.2s51 19.9 70.2.7c14.8-14.8 23.5-65.7 26.8-88.3.8-5.5-3.9-10.2-9.5-9.4zm311.7-256.5c-33 3.9-48.6-25.1-45.7-45.7 3.4-24 7.4-42.1 11.5-56.5C285.1-13.4 161.8-.5 80.6 80.6-.5 161.7-13.4 285 41.4 379.9c14.4-4.1 32.4-8 56.5-11.5 33.2-3.9 48.6 25.2 45.7 45.7-3.4 24-7.4 42.1-11.5 56.5 94.8 54.8 218.1 41.9 299.3-39.2s94-204.4 39.2-299.3c-14.4 4.1-32.5 8-56.5 11.5zM255.7 106c3.3-13.2 22.4-11.5 23.6 1.8l4.8 52.3 52.3 4.8c13.4 1.2 14.9 20.3 1.8 23.6l-90.5 22.6c-8.9 2.2-16.7-5.9-14.5-14.5l22.5-90.6zm-90.9 230.3L160 284l-52.3-4.8c-13.4-1.2-14.9-20.3-1.8-23.6l90.5-22.6c8.8-2.2 16.7 5.8 14.5 14.5L188.3 338c-3.1 13.2-22.2 11.7-23.5-1.7zm215.7 44.2c-29.3 29.3-75.7 50.4-116.7 50.4-18.9 0-36.6-4.5-51-14.7-9.8-6.9-8.7-21.8 2-27.2 28.3-14.6 63.9-42.4 97.8-76.3s61.7-69.6 76.3-97.8c5.4-10.5 20.2-11.9 27.3-2 32.3 45.3 7.1 124.7-35.7 167.6z"
      }))))), external_react_default.a.createElement("div", {
        className: "col-4 ranking_cont animated fadeIn delay-1s"
      }, myUsers.map(function (user) {
        return external_react_default.a.createElement(link_default.a, {
          href: "/perfil/".concat(user.id)
        }, external_react_default.a.createElement("a", {
          className: "user_cont shadow"
        }, external_react_default.a.createElement("div", {
          className: "user_description"
        }, external_react_default.a.createElement("img", {
          src: user.perfilImg,
          alt: "",
          className: "img-fluid"
        }), external_react_default.a.createElement("p", null, user.fullName)), external_react_default.a.createElement("p", {
          className: "user_rank"
        }, "172%")));
      })), external_react_default.a.createElement("div", {
        className: "col-8 userStar_cont shadow animated fadeIn delay-1s"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement("img", {
        src: userStar.perfilImg,
        alt: "",
        className: "img-fluid shadow"
      })), external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement("h2", null, userStar.fullName), external_react_default.a.createElement("p", null, "De una total desconcida, a el usuario con mas regalos en greenlink. Gloria nos cuenta a travez de una entrevista realizada por nuestro equipo, su experiencia en greenlink, su trabajo en el reciclaje, como la ven sus fans. Gloria es una super-estrella que nos acompa\xF1a en cada evento por el cambio climatico!")), external_react_default.a.createElement("div", {
        className: "col-12 interview"
      }, external_react_default.a.createElement("p", {
        className: "greenlink_interviewver"
      }, "Greenlink: \xBFComo llegaste a nuestra red?"), external_react_default.a.createElement("p", null, "Gloria: Un amigo me dijo un dia \"oye gloria creo que esto te va a gustar\", habiamos estado hablando un par de dias antes de la necesidad de una red global para promver el cambio. Las redes sociales actuales son superficiales, faltaba algo y lo encontramos en greenlink")), external_react_default.a.createElement("div", {
        className: "col-12 text-right"
      }, external_react_default.a.createElement(external_reactstrap_["Button"], {
        size: "sm",
        outline: true,
        color: "success"
      }, "Leer articulo")))), external_react_default.a.createElement("div", {
        className: "col-12 main_article"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/article/".concat(artid)
      }, external_react_default.a.createElement("a", {
        title: "Leer articulo",
        className: "article"
      }, external_react_default.a.createElement("h2", null, "La india"), external_react_default.a.createElement("div", {
        className: "line"
      }), external_react_default.a.createElement("p", null, "Este a\xF1o la sequ\xEDa se presenta como la segunda m\xE1s mort\xEDfero de la historia del pa\xEDs y la quinta peor en el conjunto del planeta, seg\xFAn las cifras del EM-DAT, una base de datos internacional sobre cat\xE1strofes naturales."))))), external_react_default.a.createElement("div", {
        className: "row article_main_cont"
      }, external_react_default.a.createElement("div", {
        className: "col-8"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/article/id"
      }, external_react_default.a.createElement("a", {
        className: "article_cont shadow"
      }, external_react_default.a.createElement("div", {
        className: "img_cont"
      }, external_react_default.a.createElement("img", {
        src: "/static/gorilla.jpg",
        alt: "",
        className: "img-fluid"
      })), external_react_default.a.createElement("div", {
        className: "description"
      }, external_react_default.a.createElement("h3", null, "10 animales en peligro de extincion"), external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi consequuntur necessitatibus vel corrupti error veniam, beatae tenetur magnam laboriosam repellat vero! Dolore ad ex similique, reiciendis fugit temporibus velit!")))), external_react_default.a.createElement(link_default.a, {
        href: "/article/id"
      }, external_react_default.a.createElement("a", {
        className: "article_cont shadow"
      }, external_react_default.a.createElement("div", {
        className: "img_cont"
      }, external_react_default.a.createElement("img", {
        src: "/static/ni\xF1o-basura.jpg",
        alt: "",
        className: "img-fluid"
      })), external_react_default.a.createElement("div", {
        className: "description"
      }, external_react_default.a.createElement("h3", null, "Ni\xF1o filipino urgando en rio de basura"), external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi consequuntur necessitatibus vel corrupti error veniam, beatae tenetur magnam laboriosam repellat vero! Dolore ad ex similique, reiciendis fugit temporibus velit!"))))), external_react_default.a.createElement("div", {
        className: "col-4 ofert_gift"
      }, external_react_default.a.createElement("div", {
        className: "gift_banner"
      }, external_react_default.a.createElement("p", null, "Esta navidad, sera verde con ", external_react_default.a.createElement("span", null, "greenlink..."))))));
    }
  }]);

  return Main;
}(external_react_["Component"]);

/* harmony default export */ var wall_main = (main_Main);
// EXTERNAL MODULE: ./components/layout/layout.jsx + 4 modules
var layout = __webpack_require__("ZTmz");

// CONCATENATED MODULE: ./pages/wall.jsx




var wall_Wall = function Wall() {
  return external_react_default.a.createElement(layout["a" /* default */], null, external_react_default.a.createElement(wall_main, null));
};

/* harmony default export */ var wall = __webpack_exports__["default"] = (wall_Wall);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("HDbY");

var _construct2 = _interopRequireDefault2(__webpack_require__("b8xp"));

var _interopRequireWildcard = __webpack_require__("bIOf");

var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("3+Pc"));

var _defineProperty = _interopRequireDefault(__webpack_require__("9f0s"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _requestContext = __webpack_require__("qCSu");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "p1Ve":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qCSu":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "qzSc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ON_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_STORE; });
/* unused harmony export ON_NOTIFICATION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return storeSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return userAction; });
/* unused harmony export notifications */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return onNav; });
/* unused harmony export onRegister */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return onLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return onUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return onStore; });
/* unused harmony export onNotifications */
var ON_NAV = 'ON_NAV';
var ON_REGISTER = 'ON_REGISTER';
var ON_LOGIN = 'ON_LOGIN';
var ON_USER = 'ON_USER';
var ON_STORE = 'ON_STORE_SECTIONS';
var ON_NOTIFICATION = 'ON_NOTIFICATION';
var storeSections = {
  OPEN_STORE: 'OPEN_STORE',
  HOME: 'HOME',
  PRODUCT_INFO: 'PRODUCT_INFO',
  BISUTERIA: 'BISUTERIA',
  JUGUETE: 'JUGUETE',
  GOLOSINA: 'GOLOSINA',
  MUSICA: 'MUSICA',
  EBOOK: 'EBOOK',
  TV: 'TV'
};
var userAction = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT'
};
var notifications = {
  GIFT: 'GIFT',
  HEART: 'HEART',
  FRIEND: 'FRIEND'
};
var onNav = function onNav() {
  return {
    type: ON_NAV
  };
};
var onRegister = function onRegister() {
  return {
    type: ON_REGISTER
  };
};
var onLogin = function onLogin(option) {
  return {
    type: ON_LOGIN,
    option: option
  };
};
var onUser = function onUser(payload) {
  return {
    type: ON_USER,
    payload: payload
  };
};
var onStore = function onStore(section) {
  return {
    type: ON_STORE,
    section: section
  };
};
var onNotifications = function onNotifications(payload) {
  return {
    type: ON_NOTIFICATION,
    payload: payload
  };
};

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s1/B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zL0y");
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_2__);




var Logo = function Logo(_ref) {
  var logoWidth = _ref.logoWidth,
      fontSize = _ref.fontSize,
      color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/",
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    title: "Home",
    className: "logo",
    style: {
      fontSize: fontSize,
      color: color
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: {
      width: logoWidth,
      fill: color
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "62.34",
    height: "54.3",
    viewBox: "0 0 62.34 54.3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Capa_2",
    "data-name": "Capa 2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "muestras"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    style: {
      stroke: color
    },
    className: "cls-1",
    points: "30.97 49.27 5.43 49.27 18.2 27.15 30.97 5.03 43.74 27.15 56.51 49.27 30.97 49.27"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    style: {
      fill: color
    },
    className: "cls-2",
    cx: "31.17",
    cy: "5.03",
    r: "5.03"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    style: {
      fill: color
    },
    className: "cls-2",
    cx: "57.31",
    cy: "49.27",
    r: "5.03"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    style: {
      fill: color
    },
    className: "cls-2",
    cx: "5.03",
    cy: "49.27",
    r: "5.03"
  })))), "Greenlink"));
};

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vTIt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DOPR");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DBpT");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zL0y":
/***/ (function(module, exports) {



/***/ })

/******/ });