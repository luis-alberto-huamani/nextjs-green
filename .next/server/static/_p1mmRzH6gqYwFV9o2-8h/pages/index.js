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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "01UH":
/***/ (function(module, exports) {



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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6PRW":
/***/ (function(module, exports) {



/***/ }),

/***/ "7TdG":
/***/ (function(module, exports) {



/***/ }),

/***/ "9/y9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

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
    onLogin: actions["e" /* onLogin */]
  }, dispatch);
};

/* harmony default export */ var btn_resp_popOver = (Object(external_react_redux_["connect"])(null, popOver_mapDispatcToProps)(popOver_PopOver));
// EXTERNAL MODULE: ./components/notifications/notifications.scss
var notifications = __webpack_require__("ZaQC");

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
      return external_react_default.a.createElement("div", {
        className: "notifications_cont"
      }, external_react_default.a.createElement("div", {
        className: "btn_not_cont"
      }, external_react_default.a.createElement("button", {
        onClick: this.handlePop
      }, heart), external_react_default.a.createElement("span", null, "+3"), external_react_default.a.createElement(external_reactstrap_["Popover"], {
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
      }, gift), external_react_default.a.createElement("span", null, "+3"), external_react_default.a.createElement(external_reactstrap_["Popover"], {
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
      }, friendReq), external_react_default.a.createElement("span", null, "+3"), external_react_default.a.createElement(external_reactstrap_["Popover"], {
        placement: "bottom",
        target: "friend",
        isOpen: friendPop
      }, external_react_default.a.createElement(external_reactstrap_["PopoverBody"], null, external_react_default.a.createElement("ul", {
        style: {
          listStyle: "none",
          margin0: 0,
          padding: 0
        }
      }, external_react_default.a.createElement("li", null, "jhony quiere ser tu amigo"), external_react_default.a.createElement("li", null, "soph quiere ser tu amigo"), external_react_default.a.createElement("li", null, "bart quiere ser tu amigo"))))));
    }
  }]);

  return Notifications;
}(external_react_["Component"]);

;
/* harmony default export */ var notifications_notifications = (notifications_Notifications);
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
      down: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.onscroll = function () {
        if (window.scrollY > 50) {
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
    key: "render",
    value: function render() {
      var down = this.state.down;
      var isLogin = this.props.isLogin;
      return external_react_default.a.createElement("header", {
        className: external_classnames_default()({
          scroll_header: down || isLogin,
          header_hero_main: true,
          shadow: down
        })
      }, external_react_default.a.createElement("div", {
        className: "container-fluid header_main_cont animated fadeInDown"
      }, external_react_default.a.createElement(logo["a" /* default */], null), external_react_default.a.createElement("nav", null, isLogin ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(notifications_notifications, null), external_react_default.a.createElement("button", {
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
      }, external_react_default.a.createElement(buttons_button["a" /* default */], {
        color: "light"
      }, "Login")))));
    }
  }]);

  return Header;
}(external_react_["Component"]);

;

var header_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(external_redux_["bindActionCreators"])({
    onNav: actions["f" /* onNav */]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLogin: state.login,
    nav: state.nav
  };
};

/* harmony default export */ var header_header = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps, header_mapDispatchToProps)(header_Header));

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9kyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


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

/***/ "Dq6J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("w227");
/* harmony import */ var _spinner_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_scss__WEBPACK_IMPORTED_MODULE_1__);



var Spiner = function Spiner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lds-ring"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null));
};

/* harmony default export */ __webpack_exports__["a"] = (Spiner);

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "NUIT":
/***/ (function(module, exports) {



/***/ }),

/***/ "ObTy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export detect */
/* unused harmony export initialDetect */
/* unused harmony export scrollToElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateEmpty; });
var RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
var detect = function detect(id) {
  var element = document.getElementById(id);
  var position = element.getBoundingClientRect();

  if (position.top >= 0 && position.bottom - element.offsetHeight + 100 <= window.innerHeight) {
    return true;
  }

  return false;
};
var initialDetect = function initialDetect(id) {
  var element = document.getElementById(id);
  var position = element.getBoundingClientRect();

  if (position.top >= 0 && position.bottom - element.offsetHeight <= window.innerHeight) {
    return true;
  }

  return false;
};
var scrollToElement = function scrollToElement(id) {
  var position = document.getElementById(id).offsetTop;
  window.scrollTo(0, position - 70);
};
var validateEmail = function validateEmail(value) {
  return RegExp.test(value);
};
var validateEmpty = function validateEmpty(value) {
  return value && true;
};

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
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my_button shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: id,
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

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layout/layout.jsx
var layout = __webpack_require__("ZTmz");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./components/social-buttons/social.scss
var social = __webpack_require__("C/ma");

// CONCATENATED MODULE: ./components/social-buttons/heart.jsx








var heart = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, external_react_default.a.createElement("path", {
  d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
}));

var heart_Heart =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Heart, _Component);

  function Heart(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Heart);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Heart).call(this, props));
    _this.state = {
      like: 0,
      myLike: false
    };
    _this.handleLike = _this.handleLike.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Heart, [{
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
      return external_react_default.a.createElement("button", {
        title: "Amor",
        onClick: this.handleLike,
        className: "btn_social animated ".concat(className)
      }, external_react_default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        style: myLike ? {
          fill: "#8bb940"
        } : null
      }, external_react_default.a.createElement("path", {
        d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
      })), external_react_default.a.createElement("span", {
        style: myLike ? {
          color: "#8bb940"
        } : null
      }, " +", like));
    }
  }]);

  return Heart;
}(external_react_["Component"]);

;
/* harmony default export */ var social_buttons_heart = (heart_Heart);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "uuid/v1"
var v1_ = __webpack_require__("CUYq");
var v1_default = /*#__PURE__*/__webpack_require__.n(v1_);

// CONCATENATED MODULE: ./components/social-buttons/gift.jsx










var brocha = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, external_react_default.a.createElement("path", {
  d: "M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"
}));
var candy = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, external_react_default.a.createElement("path", {
  d: "M497.5 92C469.6 33.1 411.8 0 352.4 0c-27.9 0-56.2 7.3-81.8 22.6L243.1 39c-15.2 9.1-20.1 28.7-11 43.9l32.8 54.9c6 10 16.6 15.6 27.5 15.6 5.6 0 11.2-1.5 16.4-4.5l27.5-16.4c5.1-3.1 10.8-4.5 16.4-4.5 10.9 0 21.5 5.6 27.5 15.6 9.1 15.1 4.1 34.8-11 43.9L15.6 397.6c-15.2 9.1-20.1 28.7-11 43.9l32.8 54.9c6 10 16.6 15.6 27.5 15.6 5.6 0 11.2-1.5 16.4-4.5L428.6 301c71.7-42.9 104.6-133.5 68.9-209zm-177.7 13l-2.5 1.5L296.8 45c9.7-4.7 19.8-8.1 30.3-10.2l20.6 61.8c-9.8.8-19.4 3.3-27.9 8.4zM145.9 431.8l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zm107.5-63.9l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zM364.3 302l-60.5-38.5 30.8-18.3 60.5 38.5-30.8 18.3zm20.4-197.3l46-46c8.4 6.5 16 14.1 22.6 22.6L407.6 127c-5.7-9.3-13.7-16.9-22.9-22.3zm82.1 107.8l-59.5-19.8c3.2-5.3 5.8-10.9 7.4-17.1 1.1-4.5 1.7-9.1 1.8-13.6l60.4 20.1c-2.1 10.4-5.5 20.6-10.1 30.4z"
}));
var carrot = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, external_react_default.a.createElement("path", {
  d: "M298.2 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2c6.3 6.3 6.3 16.4 0 22.6-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L130.4 217 2.3 479.7c-2.9 6-3.1 13.3 0 19.7 5.4 11.1 18.9 15.7 30 10.3l133.6-65.2-49.2-49.2c-6.3-6.2-6.3-16.4 0-22.6 6.3-6.2 16.4-6.2 22.6 0l57 57 102-49.8c24-11.7 44.5-31.3 57.1-57.1 30.1-61.7 4.5-136.1-57.2-166.2zm92.1-34.9C409.8 81 399.7 32.9 360 0c-50.3 41.7-52.5 107.5-7.9 151.9l8 8c44.4 44.6 110.3 42.4 151.9-7.9-32.9-39.7-81-49.8-121.7-30.3z"
}));
var chicken = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, external_react_default.a.createElement("path", {
  d: "M462.79 49.57c-66.14-66.09-173.36-66.09-239.5 0C187.81 85.02 160.12 128 160.12 192v85.83l-40.62 40.59c-9.7 9.69-24.04 11.07-36.78 5.98-21.72-8.68-47.42-4.29-65.02 13.29-23.61 23.59-23.61 61.84 0 85.43 15.28 15.27 36.53 19.58 56.14 15.09-4.5 19.6-.18 40.83 15.1 56.1 23.61 23.59 61.88 23.59 85.49 0 17.6-17.58 21.99-43.26 13.31-64.97-5.09-12.73-3.72-27.05 5.99-36.75L234.35 352h85.89c23.2 0 43.57-3.72 61.89-10.03-39.64-43.89-39.83-110.23 1.05-151.07 34.38-34.36 86.76-39.46 128.74-16.8 1.3-44.93-14.81-90.25-49.13-124.53z"
}));
var hat = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, external_react_default.a.createElement("path", {
  d: "M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"
}));
var game = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, external_react_default.a.createElement("path", {
  d: "M480 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160c44.8 0 85.2-18.4 114.2-48h91.5c29 29.6 69.5 48 114.2 48 88.4 0 160-71.6 160-160S568.4 96 480 96zM256 276c0 6.6-5.4 12-12 12h-52v52c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-52H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h52v-52c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h52c6.6 0 12 5.4 12 12v40zm184 68c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-80c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
}));
var glass = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, external_react_default.a.createElement("path", {
  d: "M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z"
}));
var drum = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, external_react_default.a.createElement("path", {
  d: "M458.08 120.88l102.39-61.43c15.16-9.09 20.06-28.75 10.97-43.91C562.34.39 542.7-4.53 527.53 4.57l-160.69 96.41A629.32 629.32 0 0 0 288 96C128.94 96 0 153.31 0 224v160.83c0 30.46 24.03 58.4 64 80.37v-96.37c0-17.6 14.4-32 32-32s32 14.4 32 32v122.41c37.4 11.13 81 18.44 128 20.75V400.84c0-17.6 14.4-32 32-32s32 14.4 32 32V512c47-2.31 90.6-9.62 128-20.75V368.84c0-17.6 14.4-32 32-32s32 14.4 32 32v96.37c39.97-21.97 64-49.91 64-80.37V224.01c-.01-42.38-46.54-79.84-117.92-103.13zM288 304c-132.55 0-240-35.82-240-80s107.45-80 240-80c2.34 0 4.62.1 6.94.12l-87.41 52.44c-15.16 9.09-20.06 28.75-10.97 43.91 9.56 15.93 29.51 19.61 43.91 10.97l162.71-97.62C477.55 167.41 528 193.74 528 224.01 528 268.19 420.54 304 288 304z"
}));
var money = external_react_default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 288 512"
}, external_react_default.a.createElement("path", {
  d: "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
}));
var gifts = [brocha, candy, carrot, chicken, hat, game, glass, drum, money];

var gift_Gift =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Gift, _Component);

  function Gift(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Gift);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Gift).call(this, props));
    _this.state = {
      popGift: false
    };
    _this.handleGift = _this.handleGift.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Gift, [{
    key: "handleGift",
    value: function handleGift() {
      var popGift = this.state.popGift;
      this.setState({
        popGift: !popGift
      });
    }
  }, {
    key: "render",
    value: function render() {
      var popGift = this.state.popGift;
      var className = this.props.className;
      return external_react_default.a.createElement("div", {
        className: "gift_cont"
      }, external_react_default.a.createElement("button", {
        title: "Obsequiar",
        onClick: this.handleGift,
        id: "gift",
        className: "btn_social animated ".concat(className)
      }, external_react_default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, external_react_default.a.createElement("path", {
        d: "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
      }))), external_react_default.a.createElement(external_reactstrap_["Popover"], {
        isOpen: popGift,
        target: "gift",
        placement: "bottom"
      }, external_react_default.a.createElement(external_reactstrap_["PopoverBody"], null, external_react_default.a.createElement("ul", {
        className: "gifts_cont"
      }, gifts.map(function (gift) {
        return external_react_default.a.createElement("li", {
          key: v1_default()()
        }, gift);
      })))));
    }
  }]);

  return Gift;
}(external_react_["Component"]);

;
/* harmony default export */ var social_buttons_gift = (gift_Gift);
// CONCATENATED MODULE: ./components/social-buttons/comment.jsx










var comment_Comment =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Comment, _Component);

  function Comment(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Comment);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Comment).call(this, props));
    _this.state = {
      comment: '',
      commentPop: false
    };
    _this.handleChange = _this.handleChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handlePop = _this.handlePop.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Comment, [{
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
      return external_react_default.a.createElement("div", {
        className: "comment_cont"
      }, external_react_default.a.createElement("button", {
        title: "Comentar",
        id: "btn_comment",
        onClick: this.handlePop,
        className: "btn_social animated ".concat(className)
      }, external_react_default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, external_react_default.a.createElement("path", {
        d: "M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
      }))), external_react_default.a.createElement(external_reactstrap_["Popover"], {
        placement: "bottom",
        target: "btn_comment",
        isOpen: commentPop
      }, external_react_default.a.createElement(external_reactstrap_["PopoverBody"], null, external_react_default.a.createElement("form", null, external_react_default.a.createElement("textarea", {
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
      }), external_react_default.a.createElement("button", {
        className: "send_comment",
        type: "submit"
      }, "enviar")))));
    }
  }]);

  return Comment;
}(external_react_["Component"]);

;
/* harmony default export */ var social_buttons_comment = (comment_Comment);
// CONCATENATED MODULE: ./components/social-buttons/share.jsx









var share_Share =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Share, _Component);

  function Share(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Share);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Share).call(this, props));
    _this.state = {
      shared: 0,
      myShare: false
    };
    _this.handleShare = _this.handleShare.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Share, [{
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
      return external_react_default.a.createElement("button", {
        title: "Compartir",
        onClick: this.handleShare,
        className: "btn_social animated ".concat(className)
      }, external_react_default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        style: myShare ? {
          fill: "#8bb940"
        } : null
      }, external_react_default.a.createElement("path", {
        d: "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
      })), external_react_default.a.createElement("span", {
        style: myShare ? {
          color: "#8bb940"
        } : null
      }, " +", shared));
    }
  }]);

  return Share;
}(external_react_["Component"]);

;
/* harmony default export */ var share = (share_Share);
// EXTERNAL MODULE: ./components/buttons/button.jsx
var buttons_button = __webpack_require__("Q51C");

// EXTERNAL MODULE: ./components/hero/register-cont.scss
var register_cont = __webpack_require__("xJnw");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/hero/register-cont.jsx









var register_cont_RegisterCont =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(RegisterCont, _Component);

  function RegisterCont(props) {
    Object(classCallCheck["a" /* default */])(this, RegisterCont);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(RegisterCont).call(this, props));
  }

  Object(createClass["a" /* default */])(RegisterCont, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          children = _this$props.children;
      return external_react_default.a.createElement("div", {
        className: external_classnames_default()({
          reigster_cont: true,
          slideInRight: isOpen,
          slideOutRight: !isOpen
        })
      }, external_react_default.a.createElement("h1", null, "Registro"), children);
    }
  }]);

  return RegisterCont;
}(external_react_["Component"]);

;
/* harmony default export */ var hero_register_cont = (register_cont_RegisterCont);
// EXTERNAL MODULE: ./components/form/input.jsx
var input = __webpack_require__("uE91");

// EXTERNAL MODULE: ./utils/functions.js
var functions = __webpack_require__("ObTy");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/hero/hero.scss
var hero = __webpack_require__("NUIT");

// EXTERNAL MODULE: ./components/spinner/spinner.jsx
var spinner_spinner = __webpack_require__("Dq6J");

// CONCATENATED MODULE: ./components/hero/hero.jsx





















var hero_Hero =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Hero, _Component);

  function Hero(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Hero);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Hero).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "s", void 0);

    _this.state = {
      register: false,
      spinner: false,
      registerForm: true,
      mail: '',
      mailError: false,
      mailPop: false,
      pass: '',
      passPop: false
    };
    _this.onRegister = _this.onRegister.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleChange = _this.handleChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleFocus = _this.handleFocus.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSubmit = _this.onSubmit.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Hero, [{
    key: "onRegister",
    value: function onRegister() {
      var register = this.state.register;
      this.setState({
        register: !register
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(defineProperty["a" /* default */])({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      var element = "".concat(e.target.id, "Pop");
      this.setState(Object(defineProperty["a" /* default */])({}, element, false));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var _this$state = this.state,
          mail = _this$state.mail,
          pass = _this$state.pass;

      if (!Object(functions["a" /* validateEmail */])(mail.trim().toLocaleLowerCase())) {
        this.setState({
          mailPop: true
        });
      } else if (!Object(functions["b" /* validateEmpty */])(pass)) {
        this.setState({
          passPop: true
        });
      } else {
        var data = {
          mail: mail.trim().toLocaleLowerCase(),
          pass: pass
        };
        var options = {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: stringify_default()(data)
        };
        this.setState({
          spinner: true
        });
        fetch('/api/registro.js', options).then(function (res) {
          if (res.status === 201) {
            res.text().then(function (res) {
              router_default.a.push("/postregistro?id=".concat(res));
            });
          } else {
            _this2.setState({
              mailError: true,
              spinner: false
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          register = _this$state2.register,
          mail = _this$state2.mail,
          mailError = _this$state2.mailError,
          mailPop = _this$state2.mailPop,
          pass = _this$state2.pass,
          passPop = _this$state2.passPop,
          spinner = _this$state2.spinner;
      var arrowCircle = external_react_default.a.createElement("svg", {
        className: "next",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, external_react_default.a.createElement("path", {
        d: "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"
      }));
      return external_react_default.a.createElement("section", {
        className: "hero_main_cont"
      }, external_react_default.a.createElement("p", {
        className: "vertical_text"
      }, "La unica red social donde puedes ganar regalos y criptomonedas mientras te diviertes y ayudas al planeta"), external_react_default.a.createElement(hero_register_cont, {
        isOpen: register
      }, !spinner && external_react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, external_react_default.a.createElement("div", {
        className: "inputs_cont"
      }, external_react_default.a.createElement("div", {
        className: "mail_cont_registro"
      }, external_react_default.a.createElement(input["a" /* default */], {
        id: "mail",
        type: "text",
        value: mail,
        pop: mailPop,
        popText: "El correo no es valido",
        color: "light",
        placeholder: "indique su direccion de correo",
        label: "Correo",
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        style: mailError ? {
          borderColor: 'red'
        } : {
          borderColor: '#fff'
        }
      }), external_react_default.a.createElement("small", {
        style: mailError ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, "El correo ya existe!")), external_react_default.a.createElement(input["a" /* default */], {
        id: "pass",
        type: "password",
        value: pass,
        pop: passPop,
        popText: "No puede estar vacio",
        color: "light",
        placeholder: "Contrase\xF1a",
        label: "Contrase\xF1a",
        onChange: this.handleChange,
        onFocus: this.handleFocus
      })), external_react_default.a.createElement("button", {
        type: "submit",
        className: "btn_next shadow"
      }, arrowCircle)), spinner && external_react_default.a.createElement("div", {
        style: {
          marginTop: '25%'
        }
      }, external_react_default.a.createElement(spinner_spinner["a" /* default */], null))), external_react_default.a.createElement("div", {
        className: "container-fluid"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-3"
      }, external_react_default.a.createElement("div", {
        className: "social_nav_cont"
      }, external_react_default.a.createElement("nav", {
        className: "social_nav"
      }, external_react_default.a.createElement(social_buttons_heart, {
        className: "fadeIn"
      }), external_react_default.a.createElement(share, {
        className: "fadeIn delay-1s"
      }), external_react_default.a.createElement(social_buttons_gift, {
        className: "fadeIn delay-2s"
      }), external_react_default.a.createElement(social_buttons_comment, {
        className: "fadeIn delay-3s"
      })))), external_react_default.a.createElement("div", {
        className: "col-7"
      }, external_react_default.a.createElement("div", {
        className: "msg_cont"
      }, external_react_default.a.createElement("div", {
        className: "msg_cont-2 animated fadeIn delay-5s"
      }, external_react_default.a.createElement(buttons_button["a" /* default */], {
        onClick: this.onRegister,
        size: "lg",
        color: "light"
      }, "Unete"), external_react_default.a.createElement("p", null, "A Greenlink")), external_react_default.a.createElement("div", {
        className: "msg_cont-1"
      }, external_react_default.a.createElement("h1", {
        className: "animated fadeIn delay-2s"
      }, "Comparte"), external_react_default.a.createElement("div", {
        className: "msg_complementary"
      }, external_react_default.a.createElement("p", {
        className: "animated fadeIn delay-3s"
      }, "Disfruta,"), external_react_default.a.createElement("p", {
        className: "animated fadeIn delay-4s"
      }, "Diviertete,"), external_react_default.a.createElement("p", {
        className: "animated fadeIn delay-5s"
      }, "Gana greencoins"))))))));
    }
  }]);

  return Hero;
}(external_react_["Component"]);

;
/* harmony default export */ var hero_hero = (hero_Hero);
// EXTERNAL MODULE: ./components/about/about.scss
var about = __webpack_require__("6PRW");

// EXTERNAL MODULE: ./components/logo/logo.jsx
var logo = __webpack_require__("wsxs");

// CONCATENATED MODULE: ./components/about/about.jsx






var about_About = function About() {
  return external_react_default.a.createElement("section", {
    className: "about_main_cont"
  }, external_react_default.a.createElement("div", {
    className: "container-fluid"
  }, external_react_default.a.createElement("div", {
    className: "container_relative"
  }, external_react_default.a.createElement("h1", null, "EL mundo es tuyo, cuidalo!"), external_react_default.a.createElement("div", {
    className: "line"
  }), external_react_default.a.createElement("p", null, "Greenlink parte de la iniciativa del cambio, Somos la unica red social dispuesta a unir personas por un mundo mas limpio. Mas de 1000 especies hoy en dia estan en la lista de peligro de extigncion, especies que incluso llevan en el mundo mas tiempo que el hombre. Nuestro estilo de vida esta deborando el planeta a un paso alarmante. En greenlink incentivamos la union, la celebracion de la vida, el amor. Nuestra moneda busca aportar a ese cambio."), external_react_default.a.createElement("a", {
    href: "#more"
  }, "\xBFQuieres saber mas?"), external_react_default.a.createElement("div", {
    className: "logo_about_cont"
  }, external_react_default.a.createElement(buttons_button["a" /* default */], {
    size: "lg",
    color: "light"
  }, "Unete")))));
};

/* harmony default export */ var about_about = (about_About);
// CONCATENATED MODULE: ./pages/index.js




/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(layout["a" /* default */], null, external_react_default.a.createElement(hero_hero, null), external_react_default.a.createElement(about_about, null));
});

/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

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

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Ywuu":
/***/ (function(module, exports) {



/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "ZTmz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9/y9");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_base_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("R/PV");
/* harmony import */ var _layout_base_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_base_scss__WEBPACK_IMPORTED_MODULE_3__);





var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "layout_cont"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/animate.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans|Pacifico&display=swap",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Greenlink | Comparte con los tuyos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

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

/***/ "bVZc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

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

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
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
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
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
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "coPU":
/***/ (function(module, exports) {



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

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qzSc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_USER_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return onNav; });
/* unused harmony export onRegister */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return onLogin; });
/* unused harmony export onUserRegister */
var ON_NAV = 'ON_NAV';
var ON_REGISTER = 'ON_REGISTER';
var ON_LOGIN = 'ON_LOGIN';
var ON_USER_REGISTER = 'ON_USER_REGISTER';
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
var onUserRegister = function onUserRegister(user) {
  return {
    type: ON_USER_REGISTER,
    user: user
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

/***/ "uE91":
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Ywuu");
/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_form_scss__WEBPACK_IMPORTED_MODULE_9__);










var eyeOpen = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"
}));
var eyeClose = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z"
}));

var Input =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Input, _Component);

  function Input(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Input);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Input).call(this, props));
    _this.state = {
      eye: false,
      eyeShow: false,
      type: 'text'
    };
    _this.handleEye = _this.handleEye.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Input, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var type = this.props.type;

      if (type === 'password') {
        this.setState({
          type: 'password',
          eyeShow: true
        });
      }
    }
  }, {
    key: "handleEye",
    value: function handleEye() {
      var eye = this.state.eye;

      if (!eye) {
        this.setState({
          eye: true,
          type: 'text'
        });
      } else {
        this.setState({
          eye: false,
          type: 'password'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          type = _this$props.type,
          value = _this$props.value,
          pop = _this$props.pop,
          popText = _this$props.popText,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          onChange = _this$props.onChange,
          color = _this$props.color,
          placeholder = _this$props.placeholder,
          label = _this$props.label,
          style = _this$props.style;
      var eye = this.state.eye;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input_main_cont"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
          input_cont: true,
          light: color === 'light',
          dark: color === 'dark'
        }),
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: id
      }, label), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input_eye"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: id,
        value: value,
        name: id,
        type: this.state.type,
        onBlur: onBlur,
        onFocus: onFocus,
        onChange: onChange,
        placeholder: placeholder
      }), this.state.eyeShow && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "pass"
      }, eye ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.handleEye,
        type: "button"
      }, eyeOpen) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.handleEye,
        type: "button"
      }, eyeClose))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Popover"], {
        placement: "bottom",
        target: id,
        isOpen: pop
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["PopoverBody"], null, popText))));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Input);

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

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "w227":
/***/ (function(module, exports) {



/***/ }),

/***/ "wsxs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("coPU");
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var Logo = function Logo(_ref) {
  var size = _ref.size,
      color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    title: "Inicio",
    className: "logo_cont"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      dark: color === 'dark'
    }),
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Greenlink")));
};

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "xJnw":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zL0y":
/***/ (function(module, exports) {



/***/ })

/******/ });