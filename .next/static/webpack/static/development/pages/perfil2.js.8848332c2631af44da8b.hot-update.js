webpackHotUpdate("static/development/pages/perfil2.js",{

/***/ "./components/header/header.jsx":
/*!**************************************!*\
  !*** ./components/header/header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _buttons_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../buttons/button */ "./components/buttons/button.jsx");
/* harmony import */ var _logo_2_logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../logo-2/logo */ "./components/logo-2/logo.jsx");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header.scss */ "./components/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _btn_resp_popOver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../btn-resp/popOver */ "./components/btn-resp/popOver.jsx");
/* harmony import */ var _notifications_notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../notifications/notifications */ "./components/notifications/notifications.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var _btn_resp_css_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../btn-resp/css-layout */ "./components/btn-resp/css-layout.jsx");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_22__);








var _jsxFileName = "/media/felix/projects/green/components/header/header.jsx";















var iconBars = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3976290093", [_btn_resp_css_layout__WEBPACK_IMPORTED_MODULE_20__["color"].danger]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
  id: "3976290093",
  dynamic: [_btn_resp_css_layout__WEBPACK_IMPORTED_MODULE_20__["color"].danger],
  __self: undefined
}, "svg.__jsx-style-dynamic-selector{fill:#fff;width:20px;border:#fff;padding:3px;-webkit-transition:ease .5s;transition:ease .5s;}svg.__jsx-style-dynamic-selector:hover{fill:".concat(_btn_resp_css_layout__WEBPACK_IMPORTED_MODULE_20__["color"].danger, ";background:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9mZWxpeC9wcm9qZWN0cy9ncmVlbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHbUIsQUFPd0IsVUFOdkIsV0FDQyxZQUNELENBS0ssV0FKSSxLQUt0QiwyQ0FKQSIsImZpbGUiOiIvbWVkaWEvZmVsaXgvcHJvamVjdHMvZ3JlZW4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b25zL2J1dHRvbic7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9sb2dvLTIvbG9nbyc7XG5pbXBvcnQgJy4vaGVhZGVyLnNjc3MnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUG9wT3ZlciBmcm9tICcuLi9idG4tcmVzcC9wb3BPdmVyJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgb25OYXYsIG9uTG9naW4gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vYnRuLXJlc3AvY3NzLWxheW91dCc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGljb25CYXJzID0gKFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzdmd7XG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBib3JkZXI6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6M3B4O1xuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlIC41cztcbiAgICAgIH1cbiAgICAgIHN2Zzpob3ZlcntcbiAgICAgICAgZmlsbDogJHtjb2xvci5kYW5nZXJ9O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgfVxuICAgIGBcbiAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8cGF0aCBkPVwiTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnpcIiAvPlxuICA8L3N2Zz5cbik7XG5cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvZ2luOiB0cnVlLFxuICAgICAgZG93bjogZmFsc2UsXG4gICAgICBub3RpZmljYXRpb25zOiB7fSxcbiAgICAgIGxvb2t1cDogW10sXG4gICAgfVxuICAgIHRoaXMub25TZWFyY2ggPSB0aGlzLm9uU2VhcmNoLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgeyBvbkxvZ2luIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvbm90aWZpY2F0aW9ucycpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5vdGlmaWNhdGlvbnM6IHJlcy5kYXRhIH0pO1xuICAgICAgb25Mb2dpbih0cnVlKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIG9uTG9naW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmKHdpbmRvdy5zY3JvbGxZID4gMzApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvd246IHRydWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG93bjogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2goZSkge1xuICAgIGNvbnN0IHsgc2VhcmNoQmFyIH0gPSB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbnM7XG4gICAgY29uc3QgdXNlcklucHV0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYodXNlcklucHV0KSB7XG4gICAgICBmZXRjaChgL2FwaS9zZWFyY2gvJHt1c2VySW5wdXR9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvb2t1cDogcmVzIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvb2t1cDogW10gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBkb3duLCBub3RpZmljYXRpb25zLCBsb29rdXAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpc0xvZ2luIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxoZWFkZXJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICBzY3JvbGxfaGVhZGVyOiBkb3duIHx8IHRydWUsLy9pc0xvZ2luLFxuICAgICAgICAgIGhlYWRlcl9oZXJvX21haW46IHRydWUsXG4gICAgICAgICAgc2hhZG93OiBkb3duLFxuICAgICAgICB9KX1cbiAgICAgID5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBoZWFkZXJfbWFpbl9jb250IGFuaW1hdGVkIGZhZGVJbkRvd25cIj5cbiAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzTG9naW4gJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmFjaEJhcl9jb250XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlYXJjaH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxvb2t1cC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxvb2t1cF9jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9va3VwLm1hcChpdGVtID0+IDxsaSBrZXk9e3V1aWQoKX0+PExpbmsgaHJlZj17aXRlbS51cmx9PjxhPntpdGVtLmZ1bGxOYW1lfTwvYT48L0xpbms+PC9saT4pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlzTG9naW4gXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnMgbm90ZXM9e25vdGlmaWNhdGlvbnN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bm90aWZpY2F0aW9ucy51cmx9PjxhIHRpdGxlPVwiSXIgYSBtaSBwZXJmaWxcIj57bm90aWZpY2F0aW9ucy5uYW1lfTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIGJvcmRlcjogXCJub25lXCJ9fSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTmF2fSBpZD1cImJ0bi1yZXNwXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpY29uQmFyc31cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFBvcE92ZXIgcG9wT3Blbj17dGhpcy5wcm9wcy5uYXZ9IC8+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IDxMaW5rIGhyZWY9XCIvbG9naW5cIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0bl9sb2dpblwiIGNvbG9yPVwibGlnaHRcIj5Mb2dpbjwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBvbk5hdiwgb25Mb2dpbiB9LCBkaXNwYXRjaCk7XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBpc0xvZ2luOiBzdGF0ZS5sb2dpbixcbiAgbmF2OiBzdGF0ZS5uYXYsXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWRlcik7XG5cbiJdfQ== */\n/*@ sourceURL=/media/felix/projects/green/components/header/header.jsx */")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
  d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3976290093", [_btn_resp_css_layout__WEBPACK_IMPORTED_MODULE_20__["color"].danger]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}));

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Header).call(this, props));
    _this.state = {
      isLogin: true,
      down: false,
      notifications: {},
      lookup: []
    };
    _this.onSearch = _this.onSearch.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _onLogin, res;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _onLogin = this.props.onLogin;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_22___default.a.get('/notifications');

              case 4:
                res = _context.sent;
                this.setState({
                  notifications: res.data
                });

                _onLogin(true);

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                Object(_store_actions__WEBPACK_IMPORTED_MODULE_19__["onLogin"])(false);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

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
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("header", {
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()({
          scroll_header: down || true,
          //isLogin,
          header_hero_main: true,
          shadow: down
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container-fluid header_main_cont animated fadeInDown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_logo_2_logo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), isLogin && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "serachBar_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        placeholder: "Buscar",
        onChange: this.onSearch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), lookup.length > 0 && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "lookup_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, lookup.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          key: uuid_v1__WEBPACK_IMPORTED_MODULE_21___default()(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, item.fullName)));
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, isLogin ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_notifications_notifications__WEBPACK_IMPORTED_MODULE_16__["default"], {
        notes: notifications,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: notifications.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        title: "Ir a mi perfil",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, notifications.name)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        style: {
          background: "transparent",
          border: "none"
        },
        onClick: this.props.onNav,
        id: "btn-resp",
        type: "button",
        className: "jsx-3521646900",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, iconBars, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3521646900",
        __self: this
      }, "button.jsx-3521646900:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9mZWxpeC9wcm9qZWN0cy9ncmVlbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRIa0MsQUFHd0MsYUFDZiIsImZpbGUiOiIvbWVkaWEvZmVsaXgvcHJvamVjdHMvZ3JlZW4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b25zL2J1dHRvbic7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9sb2dvLTIvbG9nbyc7XG5pbXBvcnQgJy4vaGVhZGVyLnNjc3MnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUG9wT3ZlciBmcm9tICcuLi9idG4tcmVzcC9wb3BPdmVyJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgb25OYXYsIG9uTG9naW4gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vYnRuLXJlc3AvY3NzLWxheW91dCc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGljb25CYXJzID0gKFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzdmd7XG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBib3JkZXI6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6M3B4O1xuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlIC41cztcbiAgICAgIH1cbiAgICAgIHN2Zzpob3ZlcntcbiAgICAgICAgZmlsbDogJHtjb2xvci5kYW5nZXJ9O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgfVxuICAgIGBcbiAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8cGF0aCBkPVwiTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnpcIiAvPlxuICA8L3N2Zz5cbik7XG5cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvZ2luOiB0cnVlLFxuICAgICAgZG93bjogZmFsc2UsXG4gICAgICBub3RpZmljYXRpb25zOiB7fSxcbiAgICAgIGxvb2t1cDogW10sXG4gICAgfVxuICAgIHRoaXMub25TZWFyY2ggPSB0aGlzLm9uU2VhcmNoLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgeyBvbkxvZ2luIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvbm90aWZpY2F0aW9ucycpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5vdGlmaWNhdGlvbnM6IHJlcy5kYXRhIH0pO1xuICAgICAgb25Mb2dpbih0cnVlKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIG9uTG9naW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmKHdpbmRvdy5zY3JvbGxZID4gMzApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvd246IHRydWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG93bjogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2goZSkge1xuICAgIGNvbnN0IHsgc2VhcmNoQmFyIH0gPSB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbnM7XG4gICAgY29uc3QgdXNlcklucHV0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYodXNlcklucHV0KSB7XG4gICAgICBmZXRjaChgL2FwaS9zZWFyY2gvJHt1c2VySW5wdXR9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvb2t1cDogcmVzIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvb2t1cDogW10gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBkb3duLCBub3RpZmljYXRpb25zLCBsb29rdXAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpc0xvZ2luIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxoZWFkZXJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICBzY3JvbGxfaGVhZGVyOiBkb3duIHx8IHRydWUsLy9pc0xvZ2luLFxuICAgICAgICAgIGhlYWRlcl9oZXJvX21haW46IHRydWUsXG4gICAgICAgICAgc2hhZG93OiBkb3duLFxuICAgICAgICB9KX1cbiAgICAgID5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBoZWFkZXJfbWFpbl9jb250IGFuaW1hdGVkIGZhZGVJbkRvd25cIj5cbiAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzTG9naW4gJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmFjaEJhcl9jb250XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlYXJjaH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxvb2t1cC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxvb2t1cF9jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9va3VwLm1hcChpdGVtID0+IDxsaSBrZXk9e3V1aWQoKX0+PExpbmsgaHJlZj17aXRlbS51cmx9PjxhPntpdGVtLmZ1bGxOYW1lfTwvYT48L0xpbms+PC9saT4pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlzTG9naW4gXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnMgbm90ZXM9e25vdGlmaWNhdGlvbnN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bm90aWZpY2F0aW9ucy51cmx9PjxhIHRpdGxlPVwiSXIgYSBtaSBwZXJmaWxcIj57bm90aWZpY2F0aW9ucy5uYW1lfTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIGJvcmRlcjogXCJub25lXCJ9fSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTmF2fSBpZD1cImJ0bi1yZXNwXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpY29uQmFyc31cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFBvcE92ZXIgcG9wT3Blbj17dGhpcy5wcm9wcy5uYXZ9IC8+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IDxMaW5rIGhyZWY9XCIvbG9naW5cIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0bl9sb2dpblwiIGNvbG9yPVwibGlnaHRcIj5Mb2dpbjwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBvbk5hdiwgb25Mb2dpbiB9LCBkaXNwYXRjaCk7XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBpc0xvZ2luOiBzdGF0ZS5sb2dpbixcbiAgbmF2OiBzdGF0ZS5uYXYsXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWRlcik7XG5cbiJdfQ== */\n/*@ sourceURL=/media/felix/projects/green/components/header/header.jsx */")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_btn_resp_popOver__WEBPACK_IMPORTED_MODULE_15__["default"], {
        popOpen: this.props.nav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "btn_login",
        color: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Login")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_18__["bindActionCreators"])({
    onNav: _store_actions__WEBPACK_IMPORTED_MODULE_19__["onNav"],
    onLogin: _store_actions__WEBPACK_IMPORTED_MODULE_19__["onLogin"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLogin: state.login,
    nav: state.nav
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ })

})
//# sourceMappingURL=perfil2.js.8848332c2631af44da8b.hot-update.js.map