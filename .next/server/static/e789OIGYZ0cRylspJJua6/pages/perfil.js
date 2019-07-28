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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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

/***/ "3FlL":
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sHpz");


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

/***/ "6ZpC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("C/ma");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_7__);








var heart = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
}));

var Heart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Heart, _Component);

  function Heart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Heart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Heart).call(this, props));
    _this.state = {
      like: 0,
      myLike: false
    };
    _this.handleLike = _this.handleLike.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Heart, [{
    key: "handleLike",
    value: function handleLike() {
      var _this$state = this.state,
          myLike = _this$state.myLike,
          like = _this$state.like;

      if (myLike) {
        this.setState({
          like: like - 1,
          myLike: false
        });
      } else {
        this.setState({
          like: like + 1,
          myLike: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          like = _this$state2.like,
          myLike = _this$state2.myLike;
      var className = this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        title: "Amor",
        onClick: this.handleLike,
        className: "btn_social animated ".concat(className)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        style: myLike ? {
          fill: "#ff6c1a"
        } : null
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        style: myLike ? {
          color: "#ff6c1a"
        } : null
      }, " +", like));
    }
  }]);

  return Heart;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
/* harmony default export */ __webpack_exports__["a"] = (Heart);

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

/***/ "6nbb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("C/ma");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_7__);









var Share =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Share, _Component);

  function Share(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Share);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Share).call(this, props));
    _this.state = {
      shared: 0,
      myShare: false
    };
    _this.handleShare = _this.handleShare.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Share, [{
    key: "handleShare",
    value: function handleShare() {
      var shared = this.state.shared;
      this.setState({
        myShare: true,
        shared: shared + 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          shared = _this$state.shared,
          myShare = _this$state.myShare;
      var className = this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        title: "Compartir",
        onClick: this.handleShare,
        className: "btn_social animated ".concat(className)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        style: myShare ? {
          fill: "#ff6c1a"
        } : null
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        style: myShare ? {
          color: "#ff6c1a"
        } : null
      }, " +", shared));
    }
  }]);

  return Share;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
/* harmony default export */ __webpack_exports__["a"] = (Share);

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

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

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

/***/ "C/ma":
/***/ (function(module, exports) {



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

/***/ "Iyuu":
/***/ (function(module, exports) {



/***/ }),

/***/ "J1yF":
/***/ (function(module, exports) {



/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "MEtN":
/***/ (function(module, exports) {



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

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

/***/ "R/PV":
/***/ (function(module, exports) {



/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

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

/***/ "V0Mx":
/***/ (function(module, exports) {



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

/***/ "YCkI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("C/ma");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_8__);










var Comment =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Comment, _Component);

  function Comment(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Comment);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Comment).call(this, props));
    _this.state = {
      comment: '',
      commentPop: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.handlePop = _this.handlePop.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Comment, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        comment: e.target.value
      });
    }
  }, {
    key: "handlePop",
    value: function handlePop() {
      var commentPop = this.state.commentPop;
      this.setState({
        commentPop: !commentPop
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          commentPop = _this$state.commentPop,
          comment = _this$state.comment;
      var className = this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "comment_cont"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        title: "Comentar",
        id: "btn_comment",
        onClick: this.handlePop,
        className: "btn_social animated ".concat(className)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Popover"], {
        placement: "bottom",
        target: "btn_comment",
        isOpen: commentPop
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["PopoverBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
        style: {
          resize: 'none',
          border: 'none',
          outline: 'none'
        },
        value: comment,
        className: "text_area_comment",
        onChange: this.handleChange,
        name: "commet",
        id: "comment",
        cols: "15",
        rows: "5"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "send_comment",
        type: "submit"
      }, "enviar")))));
    }
  }]);

  return Comment;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
/* harmony default export */ __webpack_exports__["a"] = (Comment);

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

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mEUr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("C/ma");
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("CUYq");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("qzSc");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);













var brocha = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"
}));
var candy = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M497.5 92C469.6 33.1 411.8 0 352.4 0c-27.9 0-56.2 7.3-81.8 22.6L243.1 39c-15.2 9.1-20.1 28.7-11 43.9l32.8 54.9c6 10 16.6 15.6 27.5 15.6 5.6 0 11.2-1.5 16.4-4.5l27.5-16.4c5.1-3.1 10.8-4.5 16.4-4.5 10.9 0 21.5 5.6 27.5 15.6 9.1 15.1 4.1 34.8-11 43.9L15.6 397.6c-15.2 9.1-20.1 28.7-11 43.9l32.8 54.9c6 10 16.6 15.6 27.5 15.6 5.6 0 11.2-1.5 16.4-4.5L428.6 301c71.7-42.9 104.6-133.5 68.9-209zm-177.7 13l-2.5 1.5L296.8 45c9.7-4.7 19.8-8.1 30.3-10.2l20.6 61.8c-9.8.8-19.4 3.3-27.9 8.4zM145.9 431.8l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zm107.5-63.9l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zM364.3 302l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zm20.4-197.3l46-46c8.4 6.5 16 14.1 22.6 22.6L407.6 127c-5.7-9.3-13.7-16.9-22.9-22.3zm82.1 107.8l-59.5-19.8c3.2-5.3 5.8-10.9 7.4-17.1 1.1-4.5 1.7-9.1 1.8-13.6l60.4 20.1c-2.1 10.4-5.5 20.6-10.1 30.4z"
}));
var carrot = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M298.2 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2c6.3 6.3 6.3 16.4 0 22.6-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L130.4 217 2.3 479.7c-2.9 6-3.1 13.3 0 19.7 5.4 11.1 18.9 15.7 30 10.3l133.6-65.2-49.2-49.2c-6.3-6.2-6.3-16.4 0-22.6 6.3-6.2 16.4-6.2 22.6 0l57 57 102-49.8c24-11.7 44.5-31.3 57.1-57.1 30.1-61.7 4.5-136.1-57.2-166.2zm92.1-34.9C409.8 81 399.7 32.9 360 0c-50.3 41.7-52.5 107.5-7.9 151.9l8 8c44.4 44.6 110.3 42.4 151.9-7.9-32.9-39.7-81-49.8-121.7-30.3z"
}));
var chicken = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M462.79 49.57c-66.14-66.09-173.36-66.09-239.5 0C187.81 85.02 160.12 128 160.12 192v85.83l-40.62 40.59c-9.7 9.69-24.04 11.07-36.78 5.98-21.72-8.68-47.42-4.29-65.02 13.29-23.61 23.59-23.61 61.84 0 85.43 15.28 15.27 36.53 19.58 56.14 15.09-4.5 19.6-.18 40.83 15.1 56.1 23.61 23.59 61.88 23.59 85.49 0 17.6-17.58 21.99-43.26 13.31-64.97-5.09-12.73-3.72-27.05 5.99-36.75L234.35 352h85.89c23.2 0 43.57-3.72 61.89-10.03-39.64-43.89-39.83-110.23 1.05-151.07 34.38-34.36 86.76-39.46 128.74-16.8 1.3-44.93-14.81-90.25-49.13-124.53z"
}));
var hat = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"
}));
var game = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M480 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160c44.8 0 85.2-18.4 114.2-48h91.5c29 29.6 69.5 48 114.2 48 88.4 0 160-71.6 160-160S568.4 96 480 96zM256 276c0 6.6-5.4 12-12 12h-52v52c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-52H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h52v-52c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h52c6.6 0 12 5.4 12 12v40zm184 68c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-80c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
}));
var glass = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z"
}));
var drum = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M458.08 120.88l102.39-61.43c15.16-9.09 20.06-28.75 10.97-43.91C562.34.39 542.7-4.53 527.53 4.57l-160.69 96.41A629.32 629.32 0 0 0 288 96C128.94 96 0 153.31 0 224v160.83c0 30.46 24.03 58.4 64 80.37v-96.37c0-17.6 14.4-32 32-32s32 14.4 32 32v122.41c37.4 11.13 81 18.44 128 20.75V400.84c0-17.6 14.4-32 32-32s32 14.4 32 32V512c47-2.31 90.6-9.62 128-20.75V368.84c0-17.6 14.4-32 32-32s32 14.4 32 32v96.37c39.97-21.97 64-49.91 64-80.37V224.01c-.01-42.38-46.54-79.84-117.92-103.13zM288 304c-132.55 0-240-35.82-240-80s107.45-80 240-80c2.34 0 4.62.1 6.94.12l-87.41 52.44c-15.16 9.09-20.06 28.75-10.97 43.91 9.56 15.93 29.51 19.61 43.91 10.97l162.71-97.62C477.55 167.41 528 193.74 528 224.01 528 268.19 420.54 304 288 304z"
}));
var money = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 288 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
}));
var gifts = [brocha, candy, carrot, chicken, hat, game, glass, drum, money];

var Gift =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Gift, _Component);

  function Gift(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Gift);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Gift).call(this, props));
    _this.state = {
      popGift: false
    };
    _this.handleGift = _this.handleGift.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Gift, [{
    key: "handleGift",
    value: function handleGift() {
      var onStore = this.props.onStore;
      onStore(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* storeSections */ "j"].OPEN_STORE); //const { popGift } = this.state;
      //this.setState({ popGift: !popGift });
    }
  }, {
    key: "render",
    value: function render() {
      var popGift = this.state.popGift;
      var className = this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "gift_cont"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        title: "Obsequiar",
        onClick: this.handleGift,
        id: "gift_button",
        className: "btn_social animated ".concat(className)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Popover"], {
        isOpen: popGift,
        target: "gift_button",
        placement: "bottom"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["PopoverBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "gifts_cont"
      }, gifts.map(function (gift) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: uuid_v1__WEBPACK_IMPORTED_MODULE_9___default()()
        }, gift);
      })))));
    }
  }]);

  return Gift;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])({
    onStore: _store_actions__WEBPACK_IMPORTED_MODULE_10__[/* onStore */ "h"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(null, mapDispatchToProps)(Gift));

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

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

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

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

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "sHpz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layout/layout.jsx + 4 modules
var layout = __webpack_require__("ZTmz");

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

// EXTERNAL MODULE: ./components/perfil/perfil.scss
var perfil = __webpack_require__("MEtN");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./components/perfil/perfil-header.scss
var perfil_header = __webpack_require__("umqm");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/perfil/perfil-header.jsx













var perfil_header_PerfilHeader =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PerfilHeader, _Component);

  function PerfilHeader(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PerfilHeader);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PerfilHeader).call(this, props));
    _this.state = {
      friendReq: false,
      localId: ''
    };
    _this.onSubmitRequestFriend = _this.onSubmitRequestFriend.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PerfilHeader, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var localId, user, checkFriendReq;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                localId = localStorage.getItem('id');
                this.setState({
                  localId: localId
                });
                user = this.props.user;
                _context.next = 5;
                return user.friendReq.find(function (item) {
                  return item.id === localId;
                });

              case 5:
                checkFriendReq = _context.sent;

                if (checkFriendReq) {
                  this.setState({
                    friendReq: true
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "onSubmitRequestFriend",
    value: function onSubmitRequestFriend(e) {
      var _this2 = this;

      e.preventDefault();
      var user = this.props.user;
      var localId = this.state.localId;
      var data = {
        currentUser: localId,
        targetUser: user._id
      };
      var options = {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        mode: 'cors',
        body: stringify_default()(data) //fetch('/api/friendRequest.js', options)

      };
      fetch('/api/friendRequest.js', options).then(function (res) {
        if (res.status === 200) {
          _this2.setState({
            friendReq: true
          });
        } else {
          _this2.setState({
            friendReq: false
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          friendReq = _this$state.friendReq,
          localId = _this$state.localId;
      var _this$props = this.props,
          user = _this$props.user,
          isLogin = _this$props.isLogin;
      var addFriend = external_react_default.a.createElement("svg", {
        id: user._id,
        style: {
          fill: '#8bb940'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512"
      }, external_react_default.a.createElement("path", {
        id: user._id,
        d: "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
      }));
      var sent = external_react_default.a.createElement("svg", {
        style: {
          fill: '#8bb940'
        },
        title: "Cancelar solicitud",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512"
      }, external_react_default.a.createElement("path", {
        d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"
      }));
      return external_react_default.a.createElement("header", {
        className: "header_perfil_cont",
        style: {
          background: "url(".concat(user.frontPageImg, ")center center no-repeat"),
          backgroundSize: 'cover'
        }
      }, external_react_default.a.createElement("div", {
        className: "greeting"
      }, external_react_default.a.createElement("h1", null, "hola, me llamo ", user.name), external_react_default.a.createElement("div", {
        className: "quote"
      }, external_react_default.a.createElement("p", null, user.frontPageQuote), external_react_default.a.createElement("div", {
        className: "line"
      }))), external_react_default.a.createElement("footer", {
        className: "perfil_header_footer"
      }), external_react_default.a.createElement("div", {
        className: "perfil_user_cont",
        style: {
          background: "url(".concat(user.perfilImg, ") center top no-repeat"),
          backgroundSize: 'cover'
        }
      }, external_react_default.a.createElement("p", {
        className: "user_name"
      }, user.name, " ", user.lastName), user._id !== localId && (!friendReq ? external_react_default.a.createElement("button", {
        id: user._id,
        title: "Enviar solicitud",
        onClick: this.onSubmitRequestFriend
      }, addFriend) : external_react_default.a.createElement("button", {
        id: user._id,
        title: "Solicitud enviada"
      }, sent))));
    }
  }]);

  return PerfilHeader;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLogin: state.login
  };
};

/* harmony default export */ var perfil_perfil_header = (Object(external_react_redux_["connect"])(mapStateToProps)(perfil_header_PerfilHeader));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "uuid/v1"
var v1_ = __webpack_require__("CUYq");
var v1_default = /*#__PURE__*/__webpack_require__.n(v1_);

// EXTERNAL MODULE: ./components/card-post/card-post.scss
var card_post = __webpack_require__("J1yF");

// EXTERNAL MODULE: ./components/social-buttons/heart.jsx
var heart = __webpack_require__("6ZpC");

// EXTERNAL MODULE: ./components/social-buttons/share.jsx
var share = __webpack_require__("6nbb");

// EXTERNAL MODULE: ./components/social-buttons/gift.jsx
var gift = __webpack_require__("mEUr");

// EXTERNAL MODULE: ./components/social-buttons/comment.jsx
var comment = __webpack_require__("YCkI");

// CONCATENATED MODULE: ./components/card-post/card-post.jsx














var card_post_heart = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, external_react_default.a.createElement("path", {
  d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
}));
var card_post_comment = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, external_react_default.a.createElement("path", {
  d: "M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
}));
var card_post_share = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, external_react_default.a.createElement("path", {
  d: "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
}));
var angle = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, external_react_default.a.createElement("path", {
  d: "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
}));

var card_post_CardPost =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(CardPost, _Component);

  function CardPost(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CardPost);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CardPost).call(this, props));
    _this.state = {
      likes: 0,
      myLike: false,
      popConfig: false
    };
    _this.handleLike = _this.handleLike.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onPopConfig = _this.onPopConfig.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }
  /*shouldComponentUpdate(nextProps) {
    if (this.props.posts !== nextProps.posts) {
      return true;
    }
    return false;
  }*/


  Object(createClass["a" /* default */])(CardPost, [{
    key: "handleLike",
    value: function handleLike() {
      var _this$state = this.state,
          myLike = _this$state.myLike,
          likes = _this$state.likes;

      if (myLike) {
        this.setState({
          myLike: false,
          likes: likes - 1
        });
      } else {
        this.setState({
          myLike: true,
          likes: likes + 1
        });
      }
    }
  }, {
    key: "onPopConfig",
    value: function onPopConfig() {
      var popConfig = this.state.popConfig;
      this.setState({
        popConfig: !popConfig
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          likes = _this$state2.likes,
          myLike = _this$state2.myLike,
          popConfig = _this$state2.popConfig;
      var posts = this.props.posts;
      return posts.map(function (post) {
        return external_react_default.a.createElement("div", {
          className: "card_post shadow animated fadeIn"
        }, external_react_default.a.createElement("div", {
          className: "header"
        }, external_react_default.a.createElement("div", {
          className: "post_info"
        }, external_react_default.a.createElement("img", {
          src: post.author.img
        }), external_react_default.a.createElement("div", {
          className: "post_data"
        }, external_react_default.a.createElement("p", null, post.author.name), external_react_default.a.createElement("p", null, post.date))), external_react_default.a.createElement("div", {
          className: "btnConfig_cont"
        }, external_react_default.a.createElement("button", {
          id: "btnConfig",
          onClick: _this2.onPopConfig
        }, "..."), external_react_default.a.createElement(external_reactstrap_["Popover"], {
          placement: "bottom",
          target: "btnConfig",
          isOpen: popConfig
        }, external_react_default.a.createElement(external_reactstrap_["PopoverBody"], null, external_react_default.a.createElement("ul", {
          className: "configList"
        }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("button", null, "Editar")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("button", null, "Eliminar"))))))), external_react_default.a.createElement("div", {
          className: "img",
          style: post.imgUrl ? {
            background: "url(\"".concat(post.imgUrl, "\") top center no-repeat"),
            backgroundSize: "cover"
          } : {
            display: 'none'
          }
        }), external_react_default.a.createElement("div", {
          className: "history"
        }, external_react_default.a.createElement("p", null, post.history)), external_react_default.a.createElement("div", {
          className: "card_footer"
        }, external_react_default.a.createElement("div", {
          className: "social_buttons"
        }, external_react_default.a.createElement(heart["a" /* default */], null), external_react_default.a.createElement(share["a" /* default */], null), external_react_default.a.createElement(gift["a" /* default */], null), external_react_default.a.createElement(comment["a" /* default */], null)), external_react_default.a.createElement("div", {
          className: "comments"
        }, external_react_default.a.createElement("button", null, angle))));
      });
    }
  }]);

  return CardPost;
}(external_react_["Component"]);

;
/* harmony default export */ var card_post_card_post = (card_post_CardPost);
// EXTERNAL MODULE: ./components/store/store.jsx
var store_store = __webpack_require__("43tM");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/perfil/add-post.scss
var add_post = __webpack_require__("Iyuu");

// CONCATENATED MODULE: ./components/perfil/add-post.jsx



var camera = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, external_react_default.a.createElement("path", {
  d: "M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
}));
var add_post_gift = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, external_react_default.a.createElement("path", {
  d: "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
}));
var addUser = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, external_react_default.a.createElement("path", {
  d: "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
}));

var add_post_AddPost = function AddPost(_ref) {
  var value = _ref.value,
      onSubmit = _ref.onSubmit,
      onChangeText = _ref.onChangeText,
      onChangeImg = _ref.onChangeImg,
      img = _ref.img,
      modal = _ref.modal;
  return external_react_default.a.createElement("div", {
    className: "add_post_cont shadow"
  }, external_react_default.a.createElement(external_reactstrap_["Card"], null, external_react_default.a.createElement(external_reactstrap_["CardBody"], {
    className: "card_title"
  }, external_react_default.a.createElement("div", {
    className: "card_header"
  }, external_react_default.a.createElement("p", null, "Crear publicaci\xF3n"))), external_react_default.a.createElement(external_reactstrap_["CardBody"], null, external_react_default.a.createElement("form", {
    onSubmit: onSubmit,
    method: "POST",
    className: "add_post_form"
  }, external_react_default.a.createElement("div", {
    className: "img_cont",
    style: img ? {
      background: "url(\"".concat(img, "\")center top no-repeat"),
      backgroundSize: 'cover'
    } : {
      display: 'none'
    }
  }), external_react_default.a.createElement(external_reactstrap_["FormGroup"], null, external_react_default.a.createElement(external_reactstrap_["Input"], {
    onChange: onChangeText,
    value: value,
    className: "text_post",
    type: "textarea"
  })), external_react_default.a.createElement("div", {
    className: "form_post_footer"
  }, external_react_default.a.createElement("div", {
    className: "footer_nav"
  }, external_react_default.a.createElement("label", {
    title: "Subir una foto",
    className: "input_file_label",
    htmlFor: "post_pic"
  }, camera, external_react_default.a.createElement("input", {
    name: "post_pic",
    id: "post_pic",
    type: "file",
    onChange: onChangeImg
  })), external_react_default.a.createElement("button", {
    title: "Deseos",
    className: "gift"
  }, add_post_gift), external_react_default.a.createElement("button", {
    title: "addUser",
    className: "gift"
  }, addUser)), external_react_default.a.createElement(external_reactstrap_["Button"], {
    type: "submit",
    outline: true
  }, "Crear"))))), external_react_default.a.createElement(external_reactstrap_["Modal"], {
    className: "my_modal_addPost",
    isOpen: modal
  }, external_react_default.a.createElement(external_reactstrap_["Spinner"], {
    color: "primary",
    size: "xl"
  })));
};

/* harmony default export */ var perfil_add_post = (add_post_AddPost);
// EXTERNAL MODULE: ./components/perfil/perfil-nav.scss
var perfil_nav = __webpack_require__("V0Mx");

// EXTERNAL MODULE: ./components/perfil/friends.scss
var perfil_friends = __webpack_require__("3FlL");

// CONCATENATED MODULE: ./components/perfil/friends.jsx



var friends_Person = function Person(_ref) {
  var id = _ref.id,
      perfilImg = _ref.perfilImg,
      name = _ref.name,
      url = _ref.url,
      frontPageQuote = _ref.frontPageQuote,
      _onClick = _ref.onClick;
  return external_react_default.a.createElement("div", {
    className: "person_cont"
  }, external_react_default.a.createElement("div", {
    className: "person_header"
  }, external_react_default.a.createElement("button", {
    id: id,
    onClick: function onClick() {
      return _onClick('rm', id);
    },
    title: "Eliminar"
  }, "X")), external_react_default.a.createElement("div", {
    className: "person_info"
  }, external_react_default.a.createElement("img", {
    src: perfilImg,
    className: "img-fluid",
    alt: name
  }), external_react_default.a.createElement("div", {
    className: "person_description"
  }, external_react_default.a.createElement("a", {
    href: url
  }, name), external_react_default.a.createElement("p", null, frontPageQuote))), external_react_default.a.createElement("div", {
    className: "person_footer"
  }, external_react_default.a.createElement("button", {
    onClick: function onClick() {
      return _onClick('add', id);
    }
  }, "Agregar")));
};

var friends_Friends = function Friends(_ref2) {
  var users = _ref2.users,
      onClick = _ref2.onClick;
  return external_react_default.a.createElement("section", {
    className: "friends_main_cont"
  }, users.map(function (user) {
    return external_react_default.a.createElement(friends_Person, {
      id: user.id,
      onClick: onClick,
      name: user.fullName,
      url: user.url,
      perfilImg: user.perfilImg,
      frontPageQuote: user.frontPageQuote
    });
  }));
};

/* harmony default export */ var components_perfil_friends = (friends_Friends);
// CONCATENATED MODULE: ./components/perfil/perfil-nav.jsx




















var myUsers = [{
  id: '1234561',
  url: '/kadkans',
  fullName: 'jhon',
  perfilImg: '/static/friend-1.jpg',
  frontPageQuote: 'Debemos cuidar el mundo, yo siemre reciclo mis latas de cerveza'
}, {
  id: '1234562',
  url: '/kadkans',
  fullName: 'sacha',
  perfilImg: '/static/friend-2.jpg',
  frontPageQuote: 'En el set de grabacion todos los condones se reciclan'
}, {
  id: '1234563',
  url: '/kadkans',
  fullName: 'rachel',
  perfilImg: '/static/friend-3.jpg',
  frontPageQuote: 'Debemos cuidar nuestras playas para evitar el sifilis'
}];
var myFriends = [{
  id: '1234564',
  url: '/kadkans',
  fullName: 'mia',
  perfilImg: '/static/friend-4.jpg',
  frontPageQuote: 'No tengo nada que decir, solo entre aqui a subir mis videos para ganar greencoins'
}];

var perfil_nav_PerfilNav =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PerfilNav, _Component);

  function PerfilNav(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PerfilNav);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PerfilNav).call(this, props));
    _this.state = {
      activeTab: '1',
      history: '',
      imgUrl: null,
      posts: [],
      addModal: false,
      friends: [],
      reqFriend: [],
      currentUser: ''
    };
    _this.onToggle = _this.onToggle.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChangeText = _this.onChangeText.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChangeImg = _this.onChangeImg.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.addPost = _this.addPost.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleFriend = _this.handleFriend.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PerfilNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          posts = _this$props.posts,
          user = _this$props.user;
      var currentUser = localStorage.getItem('id');
      this.setState({
        currentUser: currentUser,
        posts: posts,
        reqFriend: user.friendReq,
        friends: user.friends
      }); //this.setState({ currentUser, posts: posts, reqFriend: myUsers, friends: myFriends });
    }
  }, {
    key: "onToggle",
    value: function onToggle(tab) {
      var activeTab = this.state.activeTab;

      if (activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "onChangeText",
    value: function onChangeText(e) {
      this.setState({
        history: e.target.value
      });
    }
  }, {
    key: "onChangeImg",
    value: function onChangeImg(e) {
      var _this2 = this;

      var img = e.target.files[0];
      var reader = new FileReader();

      reader.onloadend = function () {
        _this2.setState({
          imgUrl: reader.result
        });
      };

      if (img) {
        this.setState({
          imgUrl: reader.readAsDataURL(img)
        });
      } else {
        this.setState({
          imgUrl: null
        });
      }
    }
  }, {
    key: "addPost",
    value: function addPost(e) {
      var _this3 = this;

      e.preventDefault();
      var date = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
      var _this$state = this.state,
          history = _this$state.history,
          posts = _this$state.posts,
          imgUrl = _this$state.imgUrl,
          addModal = _this$state.addModal;
      var _this$props2 = this.props,
          id = _this$props2.id,
          user = _this$props2.user;
      var authorName = "".concat(user.name, " ").concat(user.lastName);
      var authorImg = user.perfilImg;
      var newPost = {
        author: {
          img: authorImg,
          name: authorName
        },
        date: date,
        imgUrl: imgUrl,
        history: history
      };
      var data = {
        id: id,
        author: newPost.author,
        date: newPost.date,
        imgUrl: newPost.imgUrl,
        history: newPost.history
      };
      this.setState({
        addModal: true
      });
      external_isomorphic_unfetch_default()('/api/newPost.js', {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: stringify_default()(data)
      }).then(function (res) {
        if (res.status === 200) {
          _this3.setState({
            history: '',
            imgUrl: null,
            posts: [newPost].concat(_toConsumableArray(_this3.state.posts)),
            addModal: false
          });
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "handleFriend",
    value: function handleFriend(action, id) {
      var _this4 = this;

      var _this$state2 = this.state,
          reqFriend = _this$state2.reqFriend,
          friends = _this$state2.friends;
      var currentUser = localStorage.getItem('id');
      var targetUser = id;
      var data = {
        currentUser: currentUser,
        targetUser: targetUser
      };
      var options = {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: stringify_default()(data)
      };

      if (action === 'add') {
        external_isomorphic_unfetch_default()("/api/addFriend.js", options).then(function (res) {
          if (res.status === 200) {
            var newReqFriends = reqFriend.filter(function (item) {
              return item.id !== id;
            });
            var newFriend = reqFriend.find(function (item) {
              return item.id === id;
            });

            _this4.setState({
              reqFriend: newReqFriends,
              friends: [newFriend].concat(_toConsumableArray(friends))
            });
          }
        });
        /*const newReqFriends = reqFriend.filter((item) => item.id !== id);
        const newFriend = reqFriend.find((item) => item.id === id);
        this.setState({ reqFriend: newReqFriends, friends: [newFriend, ...friends] });*/
      }

      if (action === 'rm') {
        external_isomorphic_unfetch_default()("/api/rmFriend.js", options).then(function (res) {
          if (res.status === 200) {
            var newReqFriends = reqFriend.filter(function (item) {
              return item.id !== id;
            });

            _this4.setState({
              reqFriend: newReqFriends
            });
          }
        }); //const newReqFriends = reqFriend.filter((item) => item.id !== id);
        //this.setState({ reqFriend: newReqFriends });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state3 = this.state,
          activeTab = _this$state3.activeTab,
          history = _this$state3.history,
          imgUrl = _this$state3.imgUrl,
          posts = _this$state3.posts,
          addModal = _this$state3.addModal,
          reqFriend = _this$state3.reqFriend,
          friends = _this$state3.friends,
          currentUser = _this$state3.currentUser;
      var _this$props3 = this.props,
          store = _this$props3.store,
          user = _this$props3.user;
      return external_react_default.a.createElement("div", null, store && external_react_default.a.createElement(store_store["a" /* default */], null), external_react_default.a.createElement(external_reactstrap_["Nav"], {
        tabs: true
      }, external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        className: external_classnames_default()({
          active: this.state.activeTab === '1',
          nav_item: this.state.activeTab !== '1'
        }),
        onClick: function onClick() {
          _this5.onToggle('1');
        }
      }, "Muro")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        className: external_classnames_default()({
          active: this.state.activeTab === '2',
          nav_item: this.state.activeTab !== '2'
        }),
        onClick: function onClick() {
          _this5.onToggle('2');
        }
      }, "Historia")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        className: external_classnames_default()({
          active: this.state.activeTab === '3',
          nav_item: this.state.activeTab !== '3'
        }),
        onClick: function onClick() {
          _this5.onToggle('3');
        }
      }, "Amigos")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        className: external_classnames_default()({
          active: this.state.activeTab === '4',
          nav_item: this.state.activeTab !== '4'
        }),
        onClick: function onClick() {
          _this5.onToggle('4');
        }
      }, "Deseos"))), external_react_default.a.createElement(external_reactstrap_["TabContent"], {
        activeTab: activeTab
      }, external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "1"
      }, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        sm: "12"
      }, currentUser === user._id && external_react_default.a.createElement("div", null, external_react_default.a.createElement(perfil_add_post, {
        value: history,
        onChangeText: this.onChangeText,
        img: imgUrl,
        onChangeImg: this.onChangeImg,
        onSubmit: this.addPost,
        modal: addModal
      }), external_react_default.a.createElement("div", {
        className: "line"
      })))), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(card_post_card_post, {
        posts: posts
      })))), external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "2"
      }, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        sm: "12"
      }, external_react_default.a.createElement("div", {
        className: "info_perfil_con"
      }, external_react_default.a.createElement("h2", null, "Historia"), external_react_default.a.createElement("p", null, user.history)), external_react_default.a.createElement("div", {
        className: "info_perfil_con"
      }, external_react_default.a.createElement("h2", null, "intereses"), external_react_default.a.createElement("p", null, user.interest)), external_react_default.a.createElement("div", {
        className: "info_perfil_con"
      }, external_react_default.a.createElement("h2", null, "correo"), external_react_default.a.createElement("p", null, user.mail))))), external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "3"
      }, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        sm: "6"
      }, external_react_default.a.createElement("ul", {
        className: "friend_main_cont"
      }, friends.map(function (item) {
        return external_react_default.a.createElement("li", {
          key: v1_default()()
        }, external_react_default.a.createElement("a", {
          href: item.url
        }, external_react_default.a.createElement("div", {
          className: "friend_cont"
        }, external_react_default.a.createElement("img", {
          className: "img-fluid",
          src: item.perfilImg,
          alt: ""
        }), external_react_default.a.createElement("p", null, item.fullName))));
      }))), external_react_default.a.createElement(external_reactstrap_["Col"], {
        sm: "6"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", {
        style: {
          marginTop: '2rem',
          fontSize: "1rem"
        }
      }, "Solicitudes de amistad"), external_react_default.a.createElement(components_perfil_friends, {
        users: reqFriend,
        onClick: this.handleFriend
      }))))), external_react_default.a.createElement(external_reactstrap_["TabPane"], {
        tabId: "4"
      }, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        sm: "12"
      }, external_react_default.a.createElement("h2", null, "Tab 4"))))));
    }
  }]);

  return PerfilNav;
}(external_react_["Component"]);

;

var perfil_nav_mapStateToProps = function mapStateToProps(state) {
  return {
    store: state.store
  };
};

/* harmony default export */ var perfil_perfil_nav = (Object(external_react_redux_["connect"])(perfil_nav_mapStateToProps)(perfil_nav_PerfilNav));
// CONCATENATED MODULE: ./components/perfil/perfil.jsx










var perfil_Perfil =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Perfil, _Component);

  function Perfil(props) {
    Object(classCallCheck["a" /* default */])(this, Perfil);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Perfil).call(this, props));
  }

  Object(createClass["a" /* default */])(Perfil, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      return external_react_default.a.createElement("div", {
        className: "perfil_main_cont"
      }, external_react_default.a.createElement(perfil_perfil_header, {
        user: user
      }), external_react_default.a.createElement(perfil_perfil_nav, {
        user: user,
        id: user._id,
        posts: user.posts
      }));
    }
  }]);

  return Perfil;
}(external_react_["Component"]);

/* harmony default export */ var perfil_perfil = (perfil_Perfil);
// CONCATENATED MODULE: ./pages/perfil.js







var perfil_App = function App(_ref) {
  var user = _ref.user;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(layout["a" /* default */], null, external_react_default.a.createElement(perfil_perfil, {
    user: user
  })));
};

perfil_App.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(_ref2) {
    var query, id, res, user;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            id = query.id;
            _context.next = 4;
            return external_isomorphic_unfetch_default()("http://green.etii5dypfm.us-east-2.elasticbeanstalk.com/api/perfil.js?id=".concat(id));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            user = _context.sent;
            return _context.abrupt("return", {
              user: user
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ var pages_perfil = __webpack_exports__["default"] = (perfil_App);

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

/***/ "umqm":
/***/ (function(module, exports) {



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

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "zL0y":
/***/ (function(module, exports) {



/***/ })

/******/ });