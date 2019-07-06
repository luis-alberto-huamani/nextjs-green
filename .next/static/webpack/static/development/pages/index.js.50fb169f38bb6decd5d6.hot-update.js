webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/btn-resp/css-layout.jsx":
/*!********************************************!*\
  !*** ./components/btn-resp/css-layout.jsx ***!
  \********************************************/
/*! exports provided: normalize, color, font, sizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "font", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
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

/***/ }),

/***/ "./components/header/header.jsx":
/*!**************************************!*\
  !*** ./components/header/header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _buttons_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../buttons/button */ "./components/buttons/button.jsx");
/* harmony import */ var _logo_2_logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logo-2/logo */ "./components/logo-2/logo.jsx");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header.scss */ "./components/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _btn_resp_popOver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../btn-resp/popOver */ "./components/btn-resp/popOver.jsx");
/* harmony import */ var _notifications_notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../notifications/notifications */ "./components/notifications/notifications.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _btn_resp_css_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../btn-resp/css-layout */ "./components/btn-resp/css-layout.jsx");





var _jsxFileName = "/media/felix/projects/green/components/header/header.jsx";













var iconBars = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3976290093", [_btn_resp_css_layout__WEBPACK_IMPORTED_MODULE_17__["color"].danger]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
  id: "3976290093",
  dynamic: [_btn_resp_css_layout__WEBPACK_IMPORTED_MODULE_17__["color"].danger],
  __self: undefined
}, "svg.__jsx-style-dynamic-selector{fill:#fff;width:20px;border:#fff;padding:3px;-webkit-transition:ease .5s;transition:ease .5s;}svg.__jsx-style-dynamic-selector:hover{fill:".concat(_btn_resp_css_layout__WEBPACK_IMPORTED_MODULE_17__["color"].danger, ";background:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9mZWxpeC9wcm9qZWN0cy9ncmVlbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVnQixBQUdtQixBQU93QixVQU52QixXQUNDLFlBQ0QsQ0FLSyxXQUpJLEtBS3RCLDJDQUpBIiwiZmlsZSI6Ii9tZWRpYS9mZWxpeC9wcm9qZWN0cy9ncmVlbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbnMvYnV0dG9uJztcbmltcG9ydCBMb2dvIGZyb20gJy4uL2xvZ28tMi9sb2dvJztcbmltcG9ydCAnLi9oZWFkZXIuc2Nzcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQb3BPdmVyIGZyb20gJy4uL2J0bi1yZXNwL3BvcE92ZXInO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBvbk5hdiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9idG4tcmVzcC9jc3MtbGF5b3V0JztcblxuY29uc3QgaWNvbkJhcnMgPSAoXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHN2Z3tcbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGJvcmRlcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzozcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGVhc2UgLjVzO1xuICAgICAgfVxuICAgICAgc3ZnOmhvdmVye1xuICAgICAgICBmaWxsOiAke2NvbG9yLmRhbmdlcn07XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB9XG4gICAgYFxuICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxwYXRoIGQ9XCJNMTYgMTMyaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2Vjc2YzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZDNy4xNjMgNjAgMCA2Ny4xNjMgMCA3NnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2elwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRvd246IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYod2luZG93LnNjcm9sbFkgPiA1MCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG93bjogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb3duOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGRvd24gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpc0xvZ2luIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgc2Nyb2xsX2hlYWRlcjogZG93bixcbiAgICAgICAgaGVhZGVyX2hlcm9fbWFpbjogdHJ1ZSxcbiAgICAgICAgc2hhZG93OiBkb3duLFxuICAgICAgfSl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBoZWFkZXJfbWFpbl9jb250XCI+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgIGlzTG9naW4gXG4gICAgICAgICAgICAgID8gPE5vdGlmaWNhdGlvbnMgLz5cbiAgICAgICAgICAgICAgOiA8QnV0dG9uIGNvbG9yPVwibGlnaHRcIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgICAgKi99XG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9ucyAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImxpZ2h0XCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vbk5hdn0gaWQ9XCJidG4tcmVzcFwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAge2ljb25CYXJzfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8UG9wT3ZlciBwb3BPcGVuPXt0aGlzLnByb3BzLm5hdn0gLz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBtYXBEaXNwYWN0aFRvUHJvcHMgPSBkaXNwYXRjaCA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoe29uTmF2fSwgZGlzcGF0Y2gpO1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHsgaXNMb2dpbjogc3RhdGUubG9naW4gfSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGFjdGhUb1Byb3BzKShIZWFkZXIpO1xuXG4iXX0= */\n/*@ sourceURL=/media/felix/projects/green/components/header/header.jsx */")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
  d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3976290093", [_btn_resp_css_layout__WEBPACK_IMPORTED_MODULE_17__["color"].danger]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}));

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      down: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()({
          scroll_header: down,
          header_hero_main: true,
          shadow: down
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container-fluid header_main_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_logo_2_logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_notifications_notifications__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.props.onNav,
        id: "btn-resp",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, iconBars), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_btn_resp_popOver__WEBPACK_IMPORTED_MODULE_12__["default"], {
        popOpen: this.props.nav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;

var mapDispacthToProps = function mapDispacthToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_15__["bindActionCreators"])({
    onNav: _store_actions__WEBPACK_IMPORTED_MODULE_16__["onNav"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLogin: state.login
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispacthToProps)(Header));

/***/ })

})
//# sourceMappingURL=index.js.50fb169f38bb6decd5d6.hot-update.js.map