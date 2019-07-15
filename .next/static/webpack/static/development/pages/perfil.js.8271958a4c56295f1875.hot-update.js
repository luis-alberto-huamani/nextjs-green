webpackHotUpdate("static/development/pages/perfil.js",{

/***/ "./components/perfil/perfil-nav.jsx":
/*!******************************************!*\
  !*** ./components/perfil/perfil-nav.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _card_post_card_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../card-post/card-post */ "./components/card-post/card-post.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/store */ "./components/store/store.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _add_post__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-post */ "./components/perfil/add-post.jsx");
/* harmony import */ var _perfil_nav_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./perfil-nav.scss */ "./components/perfil/perfil-nav.scss");
/* harmony import */ var _perfil_nav_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_perfil_nav_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _friends__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./friends */ "./components/perfil/friends.jsx");








var _jsxFileName = "/media/felix/projects/green/components/perfil/perfil-nav.jsx";










/*const users = [
  {
    name: 'jhon',
    lastName: 'ebrio',
    perfilImg: '/static/friend-1.jpg',
    frontPageQuote: 'Debemos cuidar el mundo, yo siemre reciclo mis latas de cerveza'
  },
  {
    name: 'sacha',
    lastName: 'gray',
    perfilImg: '/static/friend-2.jpg',
    frontPageQuote: 'En el set de grabacion todos los condones se reciclan'
  },
  {
    name: 'rachel',
    lastName: 'star',
    perfilImg: '/static/friend-3.jpg',
    frontPageQuote: 'Debemos cuidar nuestras playas para evitar el sifilis'
  },
  {
    name: 'mia',
    lastName: 'kalifa',
    perfilImg: '/static/friend-4.jpg',
    frontPageQuote: 'No tengo nada que decir, solo entre aqui a subir mis videos para ganar greencoins'
  }
];*/

var PerfilNav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PerfilNav, _Component);

  function PerfilNav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PerfilNav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(PerfilNav).call(this, props));
    _this.state = {
      activeTab: '1',
      history: '',
      imgUrl: null,
      posts: [],
      addModal: false,
      reqFriend: [],
      currentUser: ''
    };
    _this.onToggle = _this.onToggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onChangeText = _this.onChangeText.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onChangeImg = _this.onChangeImg.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.addPost = _this.addPost.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleFriend = _this.handleFriend.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PerfilNav, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props = this.props,
          posts = _this$props.posts,
          user = _this$props.user;
      this.setState({
        posts: posts,
        reqFriend: user.friendReq
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentUser = localStorage.getItem('id');
      this.setState({
        currentUser: currentUser
      });
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
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('/api/newPost.js', {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)
      }).then(function (res) {
        if (res.status === 200) {
          _this3.setState({
            history: '',
            imgUrl: null,
            posts: [newPost].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.state.posts)),
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
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)
      };

      if (action === 'add') {
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("http://localhost:4000/api/friend/add", options);
      }

      if (action === 'rm') {
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("http://localhost:4000/api/friend/rm", options);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          activeTab = _this$state2.activeTab,
          history = _this$state2.history,
          imgUrl = _this$state2.imgUrl,
          posts = _this$state2.posts,
          addModal = _this$state2.addModal,
          reqFriend = _this$state2.reqFriend,
          friends = _this$state2.friends,
          currentUser = _this$state2.currentUser;
      var _this$props3 = this.props,
          store = _this$props3.store,
          user = _this$props3.user;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, store && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_store_store__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Nav"], {
        tabs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()({
          active: this.state.activeTab === '1',
          nav_item: this.state.activeTab !== '1'
        }),
        onClick: function onClick() {
          _this4.onToggle('1');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Muro")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()({
          active: this.state.activeTab === '2',
          nav_item: this.state.activeTab !== '2'
        }),
        onClick: function onClick() {
          _this4.onToggle('2');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Historia")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()({
          active: this.state.activeTab === '3',
          nav_item: this.state.activeTab !== '3'
        }),
        onClick: function onClick() {
          _this4.onToggle('3');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Amigos")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_14___default()({
          active: this.state.activeTab === '4',
          nav_item: this.state.activeTab !== '4'
        }),
        onClick: function onClick() {
          _this4.onToggle('4');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Deseos"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["TabContent"], {
        activeTab: activeTab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["TabPane"], {
        tabId: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        sm: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, currentUser === user._id && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_add_post__WEBPACK_IMPORTED_MODULE_15__["default"], {
        value: history,
        onChangeText: this.onChangeText,
        img: imgUrl,
        onChangeImg: this.onChangeImg,
        onSubmit: this.addPost,
        modal: addModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_card_post_card_post__WEBPACK_IMPORTED_MODULE_10__["default"], {
        posts: posts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["TabPane"], {
        tabId: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        sm: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "info_perfil_con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Historia"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, user.history)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "info_perfil_con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "intereses"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, user.interest)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "info_perfil_con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "correo"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, user.mail))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["TabPane"], {
        tabId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        sm: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "Solicitudes de amistad"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "friends_main_cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_friends__WEBPACK_IMPORTED_MODULE_17__["default"], {
        users: reqFriend,
        onClick: this.handleFriend,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["TabPane"], {
        tabId: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        sm: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "Tab 4"))))));
    }
  }]);

  return PerfilNav;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return {
    store: state.store
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps)(PerfilNav));

/***/ })

})
//# sourceMappingURL=perfil.js.8271958a4c56295f1875.hot-update.js.map