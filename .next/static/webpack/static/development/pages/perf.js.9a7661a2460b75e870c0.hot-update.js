webpackHotUpdate("static/development/pages/perf.js",{

/***/ "./pages/perf.jsx":
/*!************************!*\
  !*** ./pages/perf.jsx ***!
  \************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.jsx");
/* harmony import */ var _foo_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./foo.scss */ "./pages/foo.scss");
/* harmony import */ var _foo_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_foo_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_perf_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/perf/header */ "./components/perf/header.jsx");
/* harmony import */ var _components_perf_quote__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/perf/quote */ "./components/perf/quote.jsx");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


















var Perfil =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Perfil, _Component);

  function Perfil(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Perfil);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Perfil).call(this, props));
    _this.state = {
      id: '',
      perfilImg: '',
      perfilLoader: false,
      fullName: '',
      frontPageQuote: '',
      frontPageImg: '',
      frontPageLoader: false,
      quoteVisible: false,
      owner: null,
      friendReqLoader: false,
      friendReqSent: '',
      confirmationMsg: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleChangeImg = _this.handleChangeImg.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onQuote = _this.onQuote.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onFriendReq = _this.onFriendReq.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.accpetFriend = _this.accpetFriend.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.cancelFriendReq = _this.cancelFriendReq.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onConfirmation = _this.onConfirmation.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.rmFriend = _this.rmFriend.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Perfil, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var user = this.props.user;
      var fullName = "".concat(user.name, " ").concat(user.lastName);
      this.setState({
        id: user.id,
        perfilImg: user.perfilImg,
        fullName: fullName,
        frontPageQuote: user.frontPageQuote,
        frontPageImg: user.frontPageImg,
        owner: user.owner,
        friendReqSent: user.friend
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.user);
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleChangeImg",
    value: function handleChangeImg(e) {
      var _this2 = this;

      var img = e.target.files[0];
      var formData = new FormData();
      var stateImg = "".concat(e.target.id, "Img");
      var loader = "".concat(e.target.id, "Loader");
      formData.append('file', img);

      if (img) {
        var options = {
          method: "POST",
          body: formData
        };
        this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, loader, true));
        fetch("/api/upload/".concat(stateImg), options).then(function (res) {
          if (res.status === 200) {
            res.text().then(function (resp) {
              var _this2$setState;

              _this2.setState((_this2$setState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2$setState, stateImg, resp), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2$setState, loader, false), _this2$setState));
            });
          }
        });
      }
    }
  }, {
    key: "accpetFriend",
    value: function () {
      var _accpetFriend = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var targetId;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  friendReqLoader: true
                });
                _context.prev = 1;
                targetId = e.target.id;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("/aceptFriend/".concat(targetId));

              case 5:
                this.setState({
                  friendReqSent: 'accepted',
                  friendReqLoader: false
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function accpetFriend(_x) {
        return _accpetFriend.apply(this, arguments);
      }

      return accpetFriend;
    }()
  }, {
    key: "onQuote",
    value: function onQuote() {
      var quoteVisible = this.state.quoteVisible;
      this.setState({
        quoteVisible: !quoteVisible
      });
    }
  }, {
    key: "onFriendReq",
    value: function () {
      var _onFriendReq = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var id, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  friendReqLoader: true
                });
                _context2.prev = 1;
                id = this.state.id;
                _context2.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("/sendFriendReq/".concat(id));

              case 5:
                response = _context2.sent;
                this.setState({
                  friendReqLoader: false,
                  friendReqSent: 'sent'
                });
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 9]]);
      }));

      function onFriendReq(_x2) {
        return _onFriendReq.apply(this, arguments);
      }

      return onFriendReq;
    }()
  }, {
    key: "cancelFriendReq",
    value: function () {
      var _cancelFriendReq = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var id;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                id = this.state.id;
                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("/cancelFriendReq/".concat(id));

              case 4:
                this.setState({
                  friendReqSent: ''
                });
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function cancelFriendReq() {
        return _cancelFriendReq.apply(this, arguments);
      }

      return cancelFriendReq;
    }()
  }, {
    key: "onConfirmation",
    value: function onConfirmation() {
      this.setState({
        confirmationMsg: !this.state.confirmationMsg
      });
    }
  }, {
    key: "rmFriend",
    value: function () {
      var _rmFriend = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var id;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = this.state.id;
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("/rmFriend/".concat(id));

              case 4:
                this.setState({
                  friendReqSent: '',
                  confirmationMsg: !this.state.confirmationMsg
                });
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function rmFriend() {
        return _rmFriend.apply(this, arguments);
      }

      return rmFriend;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          id = _this$state.id,
          perfilImg = _this$state.perfilImg,
          perfilLoader = _this$state.perfilLoader,
          fullName = _this$state.fullName,
          quoteVisible = _this$state.quoteVisible,
          frontPageQuote = _this$state.frontPageQuote,
          frontPageImg = _this$state.frontPageImg,
          frontPageLoader = _this$state.frontPageLoader,
          owner = _this$state.owner,
          friendReqLoader = _this$state.friendReqLoader,
          friendReqSent = _this$state.friendReqSent,
          confirmationMsg = _this$state.confirmationMsg;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_layout_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_perf_quote__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isOpen: quoteVisible,
        onQuote: this.onQuote,
        handleChange: this.handleChange,
        quote: frontPageQuote,
        owner: owner
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Modal"], {
        isOpen: confirmationMsg
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ModalBody"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "confirmation_cont"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Seguro que desea eliminar a ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, fullName)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "confirmation_btn_cont"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        size: "sm",
        onClick: this.onConfirmation,
        color: "secondary"
      }, "No"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        size: "sm",
        onClick: this.rmFriend,
        color: "success"
      }, "Si"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_perf_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        user: {
          id: id,
          perfilImg: perfilImg,
          fullName: fullName,
          frontPageImg: frontPageImg,
          frontPageQuote: frontPageQuote,
          friendReqSent: friendReqSent
        },
        owner: owner,
        frontPageLoader: frontPageLoader,
        perfilLoader: perfilLoader,
        friendReqLoader: friendReqLoader,
        action: {
          onQuote: this.onQuote,
          handleChangeImg: this.handleChangeImg,
          onFriendReq: this.onFriendReq,
          accpetFriend: this.accpetFriend,
          cancelFriendReq: this.cancelFriendReq,
          onConfirmation: this.onConfirmation
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "void_space"
      }));
    }
  }]);

  return Perfil;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Perfil, "getInitialProps", function (_ref) {
  var query = _ref.query;
  var user = query.user;
  return {
    user: user
  };
});

/* harmony default export */ __webpack_exports__["default"] = (Perfil);

/***/ })

})
//# sourceMappingURL=perf.js.9a7661a2460b75e870c0.hot-update.js.map