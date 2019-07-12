webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: ON_NAV, ON_REGISTER, ON_LOGIN, ON_USER, ON_STORE, storeSections, userAction, onNav, onRegister, onLogin, onUserRegister, onStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_NAV", function() { return ON_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_REGISTER", function() { return ON_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOGIN", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_USER", function() { return ON_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_STORE", function() { return ON_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeSections", function() { return storeSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAction", function() { return userAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNav", function() { return onNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRegister", function() { return onRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogin", function() { return onLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUserRegister", function() { return onUserRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStore", function() { return onStore; });
var ON_NAV = 'ON_NAV';
var ON_REGISTER = 'ON_REGISTER';
var ON_LOGIN = 'ON_LOGIN';
var ON_USER = 'ON_USER';
var ON_STORE = 'ON_STORE_SECTIONS';
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
var onUserRegister = function onUserRegister(payload) {
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

/***/ }),

/***/ "./store/reducers.js":
/*!***************************!*\
  !*** ./store/reducers.js ***!
  \***************************/
/*! exports provided: initialState, greenlink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenlink", function() { return greenlink; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./store/actions.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_3__);




var initialState = {
  nav: false,
  registro: false,
  login: false,
  user: {
    isLogged: false,
    data: {}
  },
  store: {
    visible: false,
    home: true,
    productInfo: false,
    bisuteria: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-1',
        url: '/static/bisuteria/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-2',
        url: '/static/bisuteria/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-3',
        url: '/static/bisuteria/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-4',
        url: '/static/bisuteria/item-4.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-5',
        url: '/static/bisuteria/item-5.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'bisuteria',
        name: 'item-6',
        url: '/static/bisuteria/item-6.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    },
    juguete: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-1',
        url: '/static/juguete/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-2',
        url: '/static/juguete/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-3',
        url: '/static/juguete/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-4',
        url: '/static/juguete/item-4.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    },
    golosina: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-1',
        url: '/static/golosina/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-2',
        url: '/static/golosina/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-3',
        url: '/static/golosina/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-4',
        url: '/static/golosina/item-4.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-5',
        url: '/static/golosina/item-5.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'juguete',
        name: 'item-6',
        url: '/static/golosina/item-6.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    },
    musica: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'musica',
        name: 'item-1',
        url: '/static/musica/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'musica',
        name: 'item-2',
        url: '/static/musica/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'musica',
        name: 'item-3',
        url: '/static/musica/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'musica',
        name: 'item-4',
        url: '/static/musica/item-4.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'musica',
        name: 'item-5',
        url: '/static/musica/item-5.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    },
    ebook: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-1',
        url: '/static/ebook/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-2',
        url: '/static/ebook/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-3',
        url: '/static/ebook/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-4',
        url: '/static/ebook/item-4.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-5',
        url: '/static/ebook/item-5.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'ebook',
        name: 'item-6',
        url: '/static/ebook/item-6.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    },
    tv: {
      visible: false,
      items: [{
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        tag: 'tv',
        name: 'item-1',
        url: '/static/tv/item-1.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        name: 'item-2',
        tag: 'tv',
        url: '/static/tv/item-2.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }, {
        id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        name: 'item-3',
        tag: 'tv',
        url: '/static/tv/item-3.jpg',
        price: '$1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }]
    }
  }
};

var nav = function nav() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.nav;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_NAV"]) {
    return !state;
  }

  return state;
};

var registro = function registro() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.registro;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_REGISTER"]) {
    return true;
  }

  return state;
};

var login = function login() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.login;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_LOGIN"]) {
    return action.option;
  }

  return state;
};
/*const user = (state = initialState.user, action) => {
  switch (action) {
    case ON_USER_REGISTER: 
      return [...state, action.user];
    default:
      return state;
  }
}*/


var store = function store() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.store;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].OPEN_STORE) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      visible: !state.visible
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].HOME) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: true,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].PRODUCT_INFO) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: true,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].BISUTERIA) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: true
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].JUGUETE) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: true
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].GOLOSINA) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: true
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].MUSICA) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: true
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].EBOOK) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: true
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: false
      })
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_STORE"] && action.section === _actions__WEBPACK_IMPORTED_MODULE_2__["storeSections"].TV) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      home: false,
      productInfo: false,
      bisuteria: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.bisuteria, {
        visible: false
      }),
      juguete: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.juguete, {
        visible: false
      }),
      golosina: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.golosina, {
        visible: false
      }),
      musica: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.musica, {
        visible: false
      }),
      ebook: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ebook, {
        visible: false
      }),
      tv: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.tv, {
        visible: true
      })
    });
  }

  return state;
};

var user = function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.user;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_USER"] && action.payload.action === _actions__WEBPACK_IMPORTED_MODULE_2__["userAction"].LOG_IN) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      isLogged: true,
      data: action.payload.data
    });
  }

  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__["ON_USER"] && action.payload.action === _actions__WEBPACK_IMPORTED_MODULE_2__["userAction"].LOG_OUT) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      isLogged: false,
      data: action.payload.data
    });
  }

  return state;
};

var greenlink = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  registro: registro,
  login: login,
  nav: nav,
  store: store,
  user: user
});

/***/ })

})
//# sourceMappingURL=_app.js.87f69fdc3033b76a540d.hot-update.js.map